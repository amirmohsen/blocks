import styled from 'styled-components';
import { hideNativeAppearance } from '@composed-components/base-util-shared-styles';

const BaseButton = styled.button.attrs({
  type: 'button',
})`
  ${hideNativeAppearance}
`;

export default BaseButton;
