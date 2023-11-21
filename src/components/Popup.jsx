import React from "react";
import styled from '@emotion/styled';
import { render } from "../assets";
import Box from "./box";
import Button from "./button";


const Wrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  transform: 'translate(0, 0)',
  width: '100vw',
  height: '100vh',
  background: 'var(--dark-1000)'
}));

const Video = styled.video(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}));



const Popup = (props) => {
  const endPopup = async () => {
    props.setShowPopup(false);
    window.location.reload();
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return props.showPopup &&
    <Wrapper>
      <Button
        size='S'
        variant='PRIMARY'
        onClick={reloadPage}
        localStyles={{
          zIndex: 1,
          position: 'absolute',
          top: 'var(--scale-24)',
          right: 'var(--scale-24)'
        }}
      >
        Skip
      </Button>
      <Video
        id="popup_video"
        className="video object-fill h-[100%] w-[100%]"
        autoPlay
        onEnded={endPopup}
      >
        <source type="video/mp4" src={render} />
      </Video>
    </Wrapper>
};

export default Popup;
