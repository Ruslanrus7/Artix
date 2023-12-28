import React, { useState } from 'react';
import Select from 'react-select';
import './SelectContext.css';

export default function SelectContext() {

  const options = [
    { value: 'openDocument', label: 'Открытый документ'}
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  return (
      <div className='select-context'>
        <div className='select-context__name'>Контекст</div>
        <Select
          classNamePrefix= 'select-context'
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          placeholder='Выберете документ'
        />
      </div>
  );
}
