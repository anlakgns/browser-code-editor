import './code-cell.css';
import { useEffect } from 'react';
import CodeEditor from './code-editor';
import { File } from '../../../state';
import { useActions } from '../../../hooks/use-actions';
import useTypedSelector from '../../../hooks/use-typed-selector';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.dark1,
  width: '100%',
  height: '100%',
}));

interface CodeCellProps {
  file: File;
}

const CodeCell: React.FC<CodeCellProps> = ({ file }) => {
  const { createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[file.nodeId]);
  const fileCode = useTypedSelector((state) => {
    let importReact: string = `
      import React from "react"
      import ReactDOM from "react-dom"   
      `;
    let allCode = importReact + file.code.content;

    return allCode;
  });

  // Debouncing : means grouping multiple sequantial calls into one. Performance improvement.
  useEffect(() => {
    if (!bundle) {
      createBundle(file.nodeId, fileCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(file.nodeId, fileCode);
    }, 750);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileCode, file.nodeId, createBundle]);

  return (
    <MainGrid>
      <CodeEditor
        initialValue={file.code.content}
        onChange={(value: string) => console.log(file.nodeId, value)}
      />
    </MainGrid>
  );
};

export default CodeCell;
