import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
  children?: ReactNode;
  image?: string;
  backdropClose?: () => void;
};

const Backdrop = styled.div`
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  box-shadow: none;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: rgb(0 0 0 / 80%);
  position: fixed;
  left: 0px;
  top: 0px;
`;

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  pointer-events: none;
  z-index: 2;
  position: fixed;
  left: 0px;
  top: 0px;
`;

const Inner = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  height: auto;
  background: var(--dark-1000);
  pointer-events: all;
  border-radius: var(--scale-8);
  border: 1px solid #FFFFFF15;
  box-shadow: 0 24px 24px 0 rgb(0 0 0 / 30%);
  overflow: hidden;
`;

const Content = styled.div`
  padding: var(--scale-24) var(--scale-48) var(--scale-48) var(--scale-48);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--scale-24);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Dialog: React.FC<Props> = ({ children, image, backdropClose }) => {
  return (
    <>
      <Outer>
        <Inner>
          <Image src={image} alt="Banner" />
          <Content>
            {children}
          </Content>
        </Inner>
      </Outer>
      <Backdrop onClick={backdropClose}/>
    </>
  )
};

export default Dialog;