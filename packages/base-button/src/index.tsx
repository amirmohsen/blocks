import styled from 'styled-components';

const BaseButton = styled.button.attrs({
  type: 'button'
})`
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

export default BaseButton;
