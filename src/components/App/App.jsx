import React from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import EditTouchKey from '../EditTouchKey/EditTouchKey.jsx';
import {getInitForm} from '../../api/index.js';

function App() {

  const [rowPanel, setRowPanel] = React.useState({})
  const [columnPanel, setColumnPanel] = React.useState({})
  const [openEditTouch, setOpenEditTouch] = React.useState(false)

  React.useEffect(() => {
    handleCssGrid(getInitForm())
  }, [])

  function handleCssGrid (data) {
    setRowPanel({row: data.rowCount})
    setColumnPanel({column: data.columnCount})
  }

  function handleOpenEditTouch () {
    setOpenEditTouch(!openEditTouch)
  }


  return (
    <div className='app'>
      <Header />
      <Main onRowPanel={setRowPanel} onColumnPanel={setColumnPanel} rowPanel={rowPanel} columnPanel={columnPanel} onOpenEditTouch={handleOpenEditTouch}/>
      <EditTouchKey openEditTouch={openEditTouch} onOpenEditTouch={handleOpenEditTouch}/>
    </div>
  );
}

export default App;
