import React from "react";
import './Button.css';

export default function Button ({name}) {
  return (
    <button className={name === 'save' ? 'button' : 'button button_type_cancel'}>
      {name === 'save' ? 'Сохранить' : 'Отменить'}
    </button>
  )
}
