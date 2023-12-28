import React from "react";
import "./Panel.css";
import BaseSetting from "../BaseSetting/BaseSetting";
import PanelSetting from "../PanelSetting/PanelSetting";

export default function Panel ({rowPanel, columnPanel, onRowPanel, onColumnPanel, onOpenEditTouch}) {
  return (
    <section className="panel">
      <h1 className="panel__title">Редактирование панели</h1>
      <BaseSetting />
      <PanelSetting rowPanel={rowPanel} columnPanel={columnPanel} onRowPanel={onRowPanel} onColumnPanel={onColumnPanel} onOpenEditTouch={onOpenEditTouch}/>
    </section>
  )
}
