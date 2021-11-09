import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CodeCell from './code/code-cell';
import Topbar from './topbar';
import { useState, useEffect } from 'react';
import Preview from '../mainSections/view/preview';
import useTypedSelector from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';
import { File, Folder } from '../../state/cellNodeTypes';
import WelcomeGuide from './welcomeGuide';

const MainGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
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
    const srcFolderNode = state.nodes.allNodes.find((n) => n.nodeId === 'main');

    // type guard
    if (srcFolderNode.nodeType === 'folder') {
      rawCode = srcFolderNode.files.find((n) => n.nodeId === 'entryPoint').code;
    }

    return rawCode;
  });
  const { createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundle);
  const allNodes = useTypedSelector((state) => state.nodes.allNodes);
  // Debouncing : means grouping multiple sequantial calls into one. Performance improvement.

  const doBundle = () => {
    createBundle(entryPointRawCode, allNodes as (File | Folder)[]);
  };
  useEffect(() => {
    if (!bundle.code) {
      doBundle();
      return;
    }

    const timer = setTimeout(async () => {
      doBundle();
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
          <CodeCell
            doBundle={doBundle}
            file={selectedFile?.nodeType === 'file' && selectedFile}
          />
        );

      case ViewStateEnum.preview:
        return <Preview code={bundle.code} err={bundle.err} />;

      case ViewStateEnum.default:
        return <WelcomeGuide />;
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
