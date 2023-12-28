import React from "react";
import './PanelSetting.css';
import SelectGrid from "../SelectGrid/SelectGrid";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import PanelScreen from "../PanelScreen/PanelScreen";
import Button from "../Button/Button";


export default function PanelSetting ({rowPanel, columnPanel, onRowPanel, onColumnPanel, onOpenEditTouch}) {
  return (
    <div className="panel-setting">
      <h2 className="panel-setting__title">Настройка панели</h2>
      <div className="panel-setting__select">
        <SelectGrid name="row" onRowPanel={onRowPanel} rowPanel={rowPanel}/>
        <SelectGrid name="columns" onColumnPanel={onColumnPanel} columnPanel={columnPanel}/>
      </div>
      <div className="panel-setting__btn-panel">
        <ButtonPanel name='add' onOpenEditTouch={onOpenEditTouch}/>
        <ButtonPanel name='remove'/>
      </div>
      <PanelScreen rowPanel={rowPanel} columnPanel={columnPanel}/>
      <div className="panel-setting__btn">
        <Button name='save'/>
        <Button name='cancel'/>
      </div>
    </div>
  )
}
