import React from 'react';
import BaseButton from '@composed-components/base-button';
import BaseCheckbox from '@composed-components/base-checkbox';
import BaseRadioButton from '@composed-components/base-radio-button';
import BaseSelect from '@composed-components/base-select';
import BaseOption from '@composed-components/base-option';

import Separator from '../Separator';

function Docs() {
  return (
    <>
      <Separator label="Base Button">
        <BaseButton>Button Text</BaseButton>
      </Separator>
      <Separator label="Base Checkbox">
        <BaseCheckbox />
      </Separator>
      <Separator label="Base Radio Button">
        <BaseRadioButton />
      </Separator>
      <Separator label="Base Select and Option">
        <BaseSelect defaultValue="1">
          <BaseOption value="1">1</BaseOption>
          <BaseOption value="2">2</BaseOption>
          <BaseOption value="3">3</BaseOption>
        </BaseSelect>
      </Separator>
    </>
  );
}

export default Docs;
