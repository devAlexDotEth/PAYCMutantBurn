import React, { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  children: ReactNode;
  columns?: number;
  gap?: string;
  localStyles?: CSSObject;
}

const Outer = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 2}, 1fr);
  gap: ${(props) => props.gap || '16px'};

  /* Apply custom styles if provided */
  ${(props) => props.localStyles}
`;

const Grid: React.FC<Props> = ({ children, columns, gap, localStyles }) => {
  return (
    <Outer columns={columns} gap={gap} localStyles={localStyles}>
      {children}
    </Outer>
  );
};

export default Grid;