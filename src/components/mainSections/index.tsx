import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CodeCell from './code/code-cell';
import useTypedSelector from '../../hooks/use-typed-selector';
import Topbar from './topbar';
import { useState, useEffect } from 'react';
import Preview from '../mainSections/view/preview';

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

  console.log(selectedFile);
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
        return <Preview code="dummy" err="dummy" />;

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
