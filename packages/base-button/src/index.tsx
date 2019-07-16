import React, { ReactElement } from 'react';
import styled from 'styled-components';

const BlankButton = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
`;

const BaseButton = (props: object): ReactElement => <BlankButton type="button" {...props} />;

export default BaseButton;
