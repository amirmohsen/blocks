import React, { ChangeEvent, InputHTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';
import { hideNativeAppearance } from '@composed-components/base-util-shared-styles';
import { serialize } from '@composed-components/base-util-shared-helpers';

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
      {...(props as Record<string, unknown>)}
      value={serialize(value)}
      onChange={onChange ? realOnChange : undefined}
    />
  );
}

export default SharedSingleValueInput;
