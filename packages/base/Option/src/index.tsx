import React, { InputHTMLAttributes } from 'react';

export interface BaseOptionProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  serialized?: string;
  value?: unknown;
}

export default function BaseOption({ value, serialized, ...props }: BaseOptionProps) {
  return (
    <option
      {...(props as Record<string, unknown>)}
      value={typeof value === 'string' ? value : serialized}
    />
  );
}
