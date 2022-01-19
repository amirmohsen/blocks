import React, { useCallback, useState } from 'react';
import BaseButton from '@composed-components/base-button';
import BaseCheckbox from '@composed-components/base-checkbox';
import BaseRadioButton from '@composed-components/base-radio-button';
import BaseSelect from '@composed-components/base-select';
import BaseMultiSelect from '@composed-components/base-multi-select';
import BaseOption from '@composed-components/base-option';
import Separator from '../Separator';

function Docs() {
  const optionList = [{ num: '1' }, { num: '2' }, { num: '3' }];
  const [option, setOption] = useState(optionList[1]);
  const onChange = useCallback((event, { value }) => {
    setOption(value);
  }, []);
  const [options, setOptions] = useState([optionList[1], optionList[2]]);
  const onChangeMulti = useCallback((event, { value }) => {
    setOptions(value);
  }, []);
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
        <BaseSelect value={option} onChange={onChange}>
          <BaseOption value={optionList[0]}>{optionList[0].num}</BaseOption>
          <BaseOption value={optionList[1]}>{optionList[1].num}</BaseOption>
          <BaseOption value={optionList[2]}>{optionList[2].num}</BaseOption>
        </BaseSelect>
      </Separator>
      <Separator label="Base Multi Select and Option">
        <BaseMultiSelect value={options} onChange={onChangeMulti}>
          <BaseOption value={optionList[0]}>{optionList[0].num}</BaseOption>
          <BaseOption value={optionList[1]}>{optionList[1].num}</BaseOption>
          <BaseOption value={optionList[2]}>{optionList[2].num}</BaseOption>
        </BaseMultiSelect>
      </Separator>
    </>
  );
}

export default Docs;
