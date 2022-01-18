import React, { ChangeEvent, InputHTMLAttributes, useCallback } from 'react';
import styled from 'styled-components';
import { hideNativeAppearance } from '@composed-components/base-util-shared-styles';
import { serialize } from '@composed-components/base-util-shared-helpers';

const StyledBaseSelect = styled.select`
  ${hideNativeAppearance}
`;

export type BaseSelectPropsExcludedInputFields = 'onChange';

export interface BaseSelectOnChangeHandlerParams {
  value: unknown;
}

export interface BaseSelectProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, BaseSelectPropsExcludedInputFields> {
  onChange?: (event: ChangeEvent<InputEvent>, params: BaseSelectOnChangeHandlerParams) => unknown;
}

function BaseSelect({ onChange, value, ...props }: BaseSelectProps) {
  const realOnChange = useCallback(
    (event) => {
      onChange?.(event, {
        value,
      });
    },
    [onChange, value]
  );
  return (
    <StyledBaseSelect
      {...(props as Record<string, unknown>)}
      value={serialize(value)}
      onChange={onChange ? realOnChange : undefined}
    />
  );
}

export default BaseSelect;
