import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px 10px;
`;

export interface SeparatorProps {
  label: string;
  children: ReactNode;
}

function Separator({ label, children }: SeparatorProps) {
  return (
    <Wrapper>
      <h2>{label}</h2>
      {children}
    </Wrapper>
  );
}

export default Separator;
