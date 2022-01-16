import React, { ChangeEvent, useCallback } from 'react';
import BaseCheckbox, {
  BaseCheckboxOnChangeHandlerParams,
  BaseCheckboxProps,
} from '@composed-components/base-checkbox';

export type BaseTogglePropsExcludedInputFields =
  | 'defaultValue'
  | 'value'
  | 'onChange'
  | 'checked'
  | 'defaultChecked';

export interface BaseToggleOnToggleHandlerParams {
  checked: boolean;
}

export type BaseToggleOnToggleHandler = (
  event: ChangeEvent<InputEvent>,
  params: BaseToggleOnToggleHandlerParams
) => unknown;

export interface BaseToggleProps
  extends Omit<BaseCheckboxProps, BaseTogglePropsExcludedInputFields> {
  toggled?: boolean;
  defaultToggled?: boolean;
  onToggle?: BaseToggleOnToggleHandler;
}

function BaseToggle({ toggled, defaultToggled, onToggle, ...props }: BaseToggleProps) {
  const onChange = useCallback(
    (event: ChangeEvent<InputEvent>, { checked }: BaseCheckboxOnChangeHandlerParams) => {
      onToggle?.(event, { checked });
    },
    [onToggle]
  );
  return (
    <BaseCheckbox
      {...props}
      onChange={onToggle ? onChange : undefined}
      checked={toggled}
      defaultChecked={defaultToggled}
      value={JSON.stringify(toggled ?? defaultToggled)}
    />
  );
}

export default BaseToggle;
