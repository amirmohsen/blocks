import React from 'react';
import {
  SharedSingleValueInput,
  SharedSingleValueInputProps,
} from '@composed-components/base-util-shared-components';

export type BaseRadioButtonPropsExcludedInputFields = 'type';

export type BaseRadioButtonProps = Omit<
  SharedSingleValueInputProps,
  BaseRadioButtonPropsExcludedInputFields
>;

function BaseRadioButton(props: BaseRadioButtonProps) {
  return <SharedSingleValueInput {...(props as unknown)} type="radio" />;
}

export default BaseRadioButton;
