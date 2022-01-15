import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const BaseStyledCheckbox = styled.input`
  display: block;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
  appearance: none;
`;

export type BaseCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

function BaseCheckbox<T>(props: BaseCheckboxProps) {
  return <BaseStyledCheckbox {...(props as unknown)} type="checkbox" />;
}

export default BaseCheckbox;
