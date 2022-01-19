import React, {
  ChangeEvent,
  Children,
  cloneElement,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
} from 'react';
import styled from 'styled-components';
import { isElement } from 'react-is';
import { hideNativeAppearance } from '@composed-components/base-util-shared-styles';
import { serialize } from '@composed-components/base-util-shared-helpers';

const StyledBaseMultiSelect = styled.select`
  ${hideNativeAppearance}
`;

export type BaseMultiSelectPropsExcludedInputFields = 'value' | 'onChange' | 'multiple';

export interface BaseMultiSelectOnChangeHandlerParams {
  value: unknown[];
}

export interface BaseMultiSelectProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, BaseMultiSelectPropsExcludedInputFields> {
  onChange?: (
    event: ChangeEvent<InputEvent>,
    params: BaseMultiSelectOnChangeHandlerParams
  ) => unknown;
  value?: unknown[];
}

export interface BaseMultiSelectMemoizedValues {
  options: ReactElement[];
  optionMap: Record<string, unknown>;
  selectedOptions: string[];
}

export default function BaseMultiSelect({
  onChange,
  value,
  children,
  ...props
}: BaseMultiSelectProps) {
  const { options, optionMap, selectedOptions } = useMemo(() => {
    return Children.toArray(children).reduce(
      (acc: BaseMultiSelectMemoizedValues, child: ReactNode): BaseMultiSelectMemoizedValues => {
        if (!isElement(child)) {
          return acc;
        }

        const childValue = child.props.value;
        const serialized = serialize(childValue);

        if (!serialized) {
          return acc;
        }

        if (value?.includes(childValue)) {
          acc.selectedOptions.push(serialized);
        }

        acc.optionMap[serialized] = childValue;
        acc.options.push(cloneElement(child, { serialized }));

        return acc;
      },
      {
        options: [],
        optionMap: {},
        selectedOptions: [],
      }
    );
  }, [children, value]);

  const realOnChange = useCallback(
    (event) => {
      onChange?.(event, {
        value: event.target.value?.map((val: string) => optionMap?.[val]) ?? [],
      });
    },
    [onChange, optionMap]
  );

  return (
    <StyledBaseMultiSelect
      {...(props as Record<string, unknown>)}
      value={selectedOptions}
      onChange={onChange ? realOnChange : undefined}
      multiple
    >
      {options}
    </StyledBaseMultiSelect>
  );
}
