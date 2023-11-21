import React from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';
import Placeholder from '../assets/placeholder.png';


type StyleProps = {
  localStyles?: CSSObject;
};

type Props = {
  image: string;
  title: string;
  active?: boolean;
  localStyles?: CSSObject;
};


const Outer = styled.div<StyleProps>`
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--scale-8);
  overflow: hidden;
  display: flex;
  border: 4px solid rgb(0 0 0 / 10%);
  ${(props) => props.localStyles};
`;

const ImageEl = styled.img`
  width: 100%;
  height: auto;
`;

const Tile: React.FC<Props> = ({ title, image = Placeholder, localStyles, ...props }) => {
  return <Outer localStyles={localStyles} {...props}><ImageEl height={169} width={169} src={image} alt={title} /></Outer>;
};

export default Tile;