import React from "react";
import './EditTouchKey.css'
import SelectAction from "../SelectAction/SelectAction";
import Button from "../Button/Button";

export default function EditTouchKey ({openEditTouch, onOpenEditTouch}) {
  return (
    <div className={openEditTouch === true ? 'edit-key edit-key_active' : 'edit-key'}>
      <div className="edit-key__wrapper">
        <h2 className="edit-key__title">Редактирование клавиши</h2>
        <input type='text' placeholder="Название" className="edit-key__input"/>
        <SelectAction />
        <div className="edit-key__btn">
          <Button name='save'/>
          <Button name='cancel'/>
        </div>
        <button className="edit-key__btn-close" onClick={()=> {onOpenEditTouch()}}/>
      </div>
    </div>
  )
}
