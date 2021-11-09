import { useRef, useEffect } from 'react';
import useTypedSelector from '../../../hooks/use-typed-selector';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

interface PreviewProps {
  code: string;
  err: string;
}

const MainGrid = styled(Grid)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  flexGrow: 1,
}));
const Iframe = styled("iframe")(({ theme }) => ({
  height: "100%",
  width: "100%"
}));
const ErrorGrid = styled(Grid)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  color: "red",
}));


// There is a security issue with iframe. From child to parent , "parent" keyword and from parent to child with querySelector and contentWindow method, we can communicate. So there is a bidirectional communication between these places and causes security vulnerability. We prevent it sandbox attribute.

// We wanted to put all code inside srcDoc but some browser limit the size of attributes.
// There is a light and secure communication way between parent-child which is a spesific event.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
// Basically we put a eventlistener in child to listen the parent for a spesific event : message.
// The rest of the default script is about error handling in preview, not the consule, for better UX

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
  const iframe = useRef<any>();
  const html = useTypedSelector((state) => {
    const publicFolder = state.nodes.allNodes.find(
      (n) => n.nodeId === 'public'
    );
    let htmlCode: string;
    if (publicFolder.nodeType === 'folder') {
      return publicFolder.files.find((n) => n.nodeId === 'html').code;
    }
  });

  useEffect(() => {
    // having fresh html&script structure everytime.
    iframe.current.srcdoc = html;

    // sending event to say: new code has arrived.
    setTimeout(() => {
      // need some time to send event. * means domains restriction. so any domain can receive these message. For further security option.
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code, html]);

  return (
    <MainGrid>
      <Iframe // iframe provide us an isolated place to execute code.
        ref={iframe}
        title="code preview"
        sandbox="allow-scripts" // break the communication with parent for security. We want to put the user code in the html we define in srcDoc, so we need to let the frame use this script so we choose allow-scripts.
        srcDoc={html} // allow us to insert html/content
      />
      {err && <ErrorGrid>{err}</ErrorGrid>}
    </MainGrid>
  );
};

export default Preview;
