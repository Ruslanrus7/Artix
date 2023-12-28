import React, { useState } from 'react';
import Select from 'react-select';
import './SelectGrid.css';

export default function SelectGrid({name, rowPanel, columnPanel, onRowPanel, onColumnPanel}) {

  const options = [
    { value: 1, label: '1'},
    { value: 2, label: '2'},
    { value: 3, label: '3'},
    { value: 4, label: '4'},
    { value: 5, label: '5'},
    { value: 6, label: '6'}
  ];

  const [columnsPanel, setColumnsPanel] = useState({});
  const [rowsPanel, setRowsPanel] = useState({})


  React.useEffect(()=> {
    console.log('---->')
    if (name === 'row') {
      return onRowPanel({row: rowsPanel.value})
    } else {
      return onColumnPanel({column: columnsPanel.value})
    }
  }, [columnsPanel, rowsPanel])

  return (
      <div className='select-grid'>
        <div className='select-grid__name'>{name === 'row' ? 'Количество строк' : 'Количество столбцов'}</div>
        <Select
          classNamePrefix= 'select-grid'
          onChange={name === 'row' ? setRowsPanel : setColumnsPanel}
          options={options}
          placeholder=''
        />
      </div>
  );
}
