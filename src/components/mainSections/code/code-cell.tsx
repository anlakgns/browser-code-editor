import CodeEditor from './code-editor';
import { File } from '../../../state';
import { useActions } from '../../../hooks/use-actions';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.dark1,
  width: '100%',
  height: '100%',
}));

interface CodeCellProps {
  file: File | null;
}

const CodeCell: React.FC<CodeCellProps> = ({ file }) => {
  const { updateFile } = useActions();
  const [editorCode, setEditorCode] = useState<string>(file.code);

  const onChangeHandler = (value: string): void => {
    setEditorCode(value);
  };
  useEffect(() => {
    // this way, prevented code deletion resulted from file change.
    updateFile(file.nodeId, 'code', editorCode, file.parent);
  }, [editorCode]);

  return (
    <MainGrid>
      <CodeEditor
        initialValue={file.code}
        onChange={(value: string) => onChangeHandler(value)}
      />
    </MainGrid>
  );
};

export default CodeCell;
