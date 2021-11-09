import '../../syntax.css';
import { useRef } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parserBabel from 'prettier/parser-babel';
import parserHTML from 'prettier/parser-html';
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { FileFormat } from '../../../state/cellNodeTypes';

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.editorColor,
  width: '100%',
  height: '100%',
  position: 'relative',
  padding: '2rem 0rem',
}));

const FormatButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  backgroundColor: theme.palette.custom.orange,
  top: '1rem',
  width: '6rem',
  zIndex: 1000,
  right: '3rem',
  fontSize: '0.7rem',
  fontWeight: 'bold',
  padding: '0.4rem',
  border: 'none',
  outline: 'none',
  borderRadius: '0.2rem',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in',
  '&:hover': {
    backgroundColor: theme.palette.custom.dark2,
    color: theme.palette.custom.orange,
  },
  '&:active': {
    transform: 'translate(0px, 5px)',
  },
}));

const BundleButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  backgroundColor: theme.palette.custom.orange,
  top: '4rem',
  width: '6rem',
  zIndex: 1000,
  right: '3rem',
  fontSize: '0.7rem',
  fontWeight: 'bold',
  padding: '0.4rem',
  border: 'none',
  outline: 'none',
  borderRadius: '0.2rem',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in',
  '&:hover': {
    backgroundColor: theme.palette.custom.dark2,
    color: theme.palette.custom.orange,
  },
  '&:active': {
    transform: 'translate(0px, 5px)',
  },
}));

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
  fileFormat: FileFormat;
  doBundle: () => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  onChange,
  initialValue,
  fileFormat,
  doBundle,
}) => {
  // for setting and getting value from editor.
  const editorRef = useRef<any>();

  // kind of onChange Handler for Editor to get Value.
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });

    //indendation config
    monacoEditor.getModel()?.updateOptions({ tabSize: 2 });

    // monocoEditor code highlighter is bad, we use a library.
    const highlighter = new Highlighter(
      // @ts-ignore
      window.monaco,
      codeShift,
      monacoEditor
    );

    // emptyh functions to override default config related with console error feedback. triggered too often in every keyboard press which is annoying. so we override them with empty functions.
    highlighter.highLightOnDidChangeModelContent(
      () => {},
      () => {},
      undefined,
      () => {}
    );
  };

  const prettierParser = fileFormat === 'javascript' ? 'babel' : 'html';
  // Prettier for formatting
  const onFormatClick = () => {
    try {
      // get current value from editor
      const unformatted = editorRef.current.getModel().getValue();

      // format the value
      const formatted = prettier
        .format(unformatted, {
          parser: prettierParser,
          plugins: [parserBabel, parserHTML],
          useTabs: false,
          semi: true,
          singleQuote: true,
        })
        .replace(/\n$/, ''); // delete new line

      // set the formatted value back in the editor.
      editorRef.current.setValue(formatted);
    } catch (err) {
      // causes to crash app often. That's why we catch err.
      console.log(err);
    }
  };

  return (
    <MainGrid>
      <FormatButton onClick={onFormatClick}>Format</FormatButton>
      <BundleButton onClick={doBundle}>Re-Bundle</BundleButton>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        language={fileFormat}
        theme="dark"
        height="100%"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      />
    </MainGrid>
  );
};

export default CodeEditor;
