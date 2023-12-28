import React, { useState } from 'react';
import Select from 'react-select';
import './SelectAction.css';

export default function SelectAction() {

  const options = [
    { value: 'openDocument', label: 'Открытый документ'}
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
      <div className='select-action'>
        <div className='select-action__name'>Действие</div>
        <Select
          classNamePrefix= 'select-action'
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder=''
        />
      </div>
  );
}
