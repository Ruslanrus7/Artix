import React from "react";
import './PanelScreen.css';
import TouchKey from "../TouchKey/TouchKey";

export default function  PanelScreen ({rowPanel, columnPanel}) {

  const cssGrid = {
    gridTemplateColumns: `repeat(${columnPanel.column}, 120px)`,
    gridTemplateRows:  `repeat(${rowPanel.row}, 120px)`
  }

  return (
    <div  className="panel-screen" style={cssGrid}>
      <TouchKey />
      <TouchKey />
      <TouchKey />
      <TouchKey />
      <TouchKey />
      <TouchKey />
      <TouchKey />
      <TouchKey />
      <TouchKey />
    </div>
  )
}
