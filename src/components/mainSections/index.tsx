import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CodeCell from './code/code-cell';
import useTypedSelector from '../../hooks/use-typed-selector';
import Topbar from './topbar';
import { useState, useEffect } from 'react';
import Preview from '../mainSections/view/preview';
import { useActions } from '../../hooks/use-actions';

const MainGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
}));

const WelcomeGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  color: 'orange',
  marginTop: '5rem',
}));

enum ViewStateEnum {
  'code',
  'preview',
  'default',
}

const Main: React.FC = () => {
  const [viewState, setViewState] = useState<ViewStateEnum>(
    ViewStateEnum.default
  );

  // for preview
  const entryPointRawCode = useTypedSelector((state) => {
    let rawCode: string;
    const srcFolderNode = state.nodes.allNodes.find((n) => n.nodeId === 'src');

    // type guard
    if (srcFolderNode.nodeType === 'folder') {
      rawCode = srcFolderNode.files.find((n) => n.nodeId === 'entryPoint').code;
    }

    return rawCode;
  });
  const { createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundle);
  const allCode = useTypedSelector(state => state.nodes.allNodes)

  // Debouncing : means grouping multiple sequantial calls into one. Performance improvement.
  useEffect(() => {
    if (!bundle.code) {
      createBundle(entryPointRawCode, allCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(entryPointRawCode, allCode);
    }, 750);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entryPointRawCode, createBundle]);

  // for code editor
  const selectedFileInfo = useTypedSelector(
    (state) => state.nodes.selectedFileInfoToView
  );
  const selectedFile = useTypedSelector((state) => {
    if (selectedFileInfo?.parent === 'workspace') {
      return state.nodes.allNodes[selectedFileInfo?.index];
    }
    if (selectedFileInfo?.parent !== 'workspace') {
      const parentFolder = state.nodes.allNodes[selectedFileInfo?.index];

      if (parentFolder?.nodeType === 'folder') {
        return parentFolder.files[selectedFileInfo?.subIndex];
      }
    }
  });

  // debug for deleting selected file
  useEffect(() => {
    if (selectedFileInfo === null) {
      setViewState(ViewStateEnum.default);
    }
  }, [selectedFileInfo]);

  const renderJSX = () => {
    switch (viewState) {
      case ViewStateEnum.code:
        return (
          <CodeCell file={selectedFile?.nodeType === 'file' && selectedFile} />
        );

      case ViewStateEnum.preview:
        return <Preview code={bundle.code} err={bundle.err} />;

      case ViewStateEnum.default:
        return <WelcomeGrid>Welcome to Nix Browser Editor</WelcomeGrid>;
    }
  };

  return (
    <MainGrid>
      {selectedFile ? (
        <Topbar
          fileName={selectedFile?.name}
          setViewState={setViewState}
          viewState={viewState}
        />
      ) : (
        ''
      )}
      {renderJSX()}
    </MainGrid>
  );
};

export default Main;
