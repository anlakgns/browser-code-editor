import '../../syntax.css';
import { useRef } from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.editorColor,
  width: '100%',
  height: '100%',
  position: 'relative',
  padding: '2rem 0rem',
}));

const FormatButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  backgroundColor: theme.palette.custom.orange,
  top: '1rem',
  width: '6rem',
  zIndex: 1000,
  right: '3rem',
  fontSize: '0.7rem',
  fontWeight: 'bold',
  padding: '0.4rem',
}));

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
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

  // Prettier for formatting
  const onFormatClick = () => {
    // get current value from editor
    const unformatted = editorRef.current.getModel().getValue();

    // format the value
    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, ''); // delete new line

    // set the formatted value back in the editor.
    editorRef.current.setValue(formatted);
  };

  return (
    <MainGrid>
      <FormatButton onClick={onFormatClick}>Format</FormatButton>
      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        language="javascript"
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
