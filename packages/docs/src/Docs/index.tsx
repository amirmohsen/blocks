import React from 'react';
import BaseButton from '@composed-components/base-button';
import BaseCheckbox from '@composed-components/base-checkbox';

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
    </>
  );
}

export default Docs;
