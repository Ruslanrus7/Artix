import React from "react";
import './ButtonPanel.css';

export default function ButtonPanel ({name, onOpenEditTouch}) {

  function handleButtonPanel () {
    if (name === 'add') {
      return onOpenEditTouch();
    }
  }

  return (
      <button className="button-panel" onClick={handleButtonPanel}>{name === 'add' ? 'Добавить клавишу' : 'Очистить панель'}</button>
  )
}
