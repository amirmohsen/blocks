import React from 'react';
import BaseButton from '@composed-components/base-button';
import BaseCheckbox from '@composed-components/base-checkbox';
import BaseRadioButton from '@composed-components/base-radio-button';

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
    </>
  );
}

export default Docs;
