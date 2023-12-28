import React from "react";
import './Input.css';

export default function Input ({name}) {
  return (
    <div className={`input-box base-setting__${name} input-box_size_${name}`}>
        <label className="input-box__label">{name === "code" ? 'код' : 'страница'}</label>
        <input type="number" className="input-box__input" name={name} />
    </div>
  )
}
