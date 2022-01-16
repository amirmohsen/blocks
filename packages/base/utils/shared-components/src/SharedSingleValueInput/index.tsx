import React, { ChangeEvent, InputHTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';
import { hideNativeAppearance } from '@composed-components/base-util-shared-styles';
import stringify from 'json-stringify-safe';

const StyledSharedSingleValueInput = styled.input`
  ${hideNativeAppearance}
`;

export type SharedSingleValueInputPropsExcludedInputFields = 'onChange';

export interface SharedSingleValueInputOnChangeHandlerParams {
  value: unknown;
  checked: boolean;
}

export interface SharedSingleValueInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    SharedSingleValueInputPropsExcludedInputFields
  > {
  onChange?: (
    event: ChangeEvent<InputEvent>,
    params: SharedSingleValueInputOnChangeHandlerParams
  ) => unknown;
}

function SharedSingleValueInput({ onChange, value, ...props }: SharedSingleValueInputProps) {
  const realOnChange = useCallback(
    (event) => {
      onChange?.(event, {
        value,
        checked: event.target.checked,
      });
    },
    [onChange, value]
  );
  return (
    <StyledSharedSingleValueInput
      {...(props as unknown)}
      value={value === undefined ? undefined : stringify(value)}
      onChange={onChange ? realOnChange : undefined}
    />
  );
}

export default SharedSingleValueInput;
