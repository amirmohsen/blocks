import React, { ChangeEventHandler, useCallback } from 'react';
import BaseCheckbox, { BaseCheckboxProps } from '@composed-components/base-checkbox';

export type BaseTogglePropsExcludedInputFields =
  | 'defaultValue'
  | 'value'
  | 'onChange'
  | 'checked'
  | 'defaultChecked';

export type BaseToggleOnToggleHandler = (
  state: boolean,
  event: ChangeEventHandler<HTMLInputElement>
) => unknown;

export interface BaseToggleProps
  extends Omit<BaseCheckboxProps, BaseTogglePropsExcludedInputFields> {
  toggled?: boolean;
  defaultToggled?: boolean;
  onToggle?: BaseToggleOnToggleHandler;
}

function BaseToggle({ toggled, defaultToggled, onToggle, ...props }: BaseToggleProps) {
  const onChange = useCallback(
    (event) => {
      onToggle?.(!event.target.checked, event);
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
