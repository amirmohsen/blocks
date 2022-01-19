import React from 'react';
import {
  SharedSingleValueInput,
  SharedSingleValueInputProps,
} from '@composed-components/base-util-shared-components';

export type BaseCheckboxPropsExcludedInputFields = 'type';

export type BaseCheckboxProps = Omit<
  SharedSingleValueInputProps,
  BaseCheckboxPropsExcludedInputFields
>;

function BaseCheckbox(props: BaseCheckboxProps) {
  return <SharedSingleValueInput {...(props as Record<string, unknown>)} type="checkbox" />;
}

export default BaseCheckbox;
