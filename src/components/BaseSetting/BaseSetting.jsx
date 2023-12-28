import React from "react";
import './BaseSetting.css';
import Input from "../InputSetting/Input";
import SelectContext from "../SelectContext/SelectContext";


export default function BaseSetting () {
  return (
    <div className="base-setting">
      <h2 className="base-setting__title">Основные настройки</h2>
      <Input name="code"/>
      <Input name="page"/>
      <SelectContext />
    </div>
  )
}
