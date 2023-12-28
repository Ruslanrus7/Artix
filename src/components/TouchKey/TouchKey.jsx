import React from "react";
import './TouchKey.css';

export default function TouchKey () {

  return (
    <div className="touch-key">
      <p className="touch-key__text">Монитор кассира (продажа)</p>
      <button className="touch-key__btn touch-key__btn-drag"/>
      <button className="touch-key__btn touch-key__btn-delete"/>
      <button className="touch-key__btn touch-key__btn-width"/>
    </div>
  )
}
