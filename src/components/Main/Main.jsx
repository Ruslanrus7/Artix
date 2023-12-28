import React from "react";
import "./Main.css";
import Panel from "../Panel/Panel";

export default function Main ({rowPanel, columnPanel, onRowPanel, onColumnPanel, onOpenEditTouch}) {
  return (
    <main className="main">
      <Panel rowPanel={rowPanel} columnPanel={columnPanel} onRowPanel={onRowPanel} onColumnPanel={onColumnPanel} onOpenEditTouch={onOpenEditTouch}/>
    </main>
  )
}
