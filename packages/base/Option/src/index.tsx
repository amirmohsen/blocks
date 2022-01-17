import React, { InputHTMLAttributes } from 'react';
import { serialize } from '@composed-components/base-util-shared-helpers';

export type BaseOptionProps = InputHTMLAttributes<HTMLInputElement>;

function BaseOption({ value, ...props }: BaseOptionProps) {
  return <option {...(props as unknown)} value={serialize(value)} />;
}

export default BaseOption;
