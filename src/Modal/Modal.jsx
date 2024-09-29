import { useState } from "react";
import classes from "./Modal.module.css";
const Modal = ({ showModal,t1,t2,t3,t4,setT1,setT2,setT3,setT4}) => {
 
  const toggle = (val) => {
    if(val==1) {
        if(t1=="OFF") {
            setT1("ON")
        }
        else {
            setT1("OFF")
        }
    }
    if(val==2) {
        if(t2=="OFF") {
            setT2("ON")
        }
        else {
            setT2("OFF")
        }
    }
    if(val==3) {
        if(t3=="OFF") {
            setT3("ON")
        }
        else {
            setT3("OFF")
        }
    }
    if(val==4) {
        if(t4=="OFF") {
            setT4("ON")
        }
        else {
            setT4("OFF")
        }
    }
  };
  return (
    <div className={classes.modalViewport}>
      <div className={classes.modalWrapper}>
        <div className={classes.individualWrapper}>
          <p>Fuel Gun Alert</p>
          <button onClick={() => toggle(1)} style={t1=='ON'?{backgroundColor:'red'}:{}}>{t1}</button>
        </div>
        <div className={classes.individualWrapper}>
          <p>Uniform Alert</p>
          <button onClick={() => toggle(2)} style={t2=='ON'?{backgroundColor:'red'}:{}}>{t2}</button>
        </div>
        <div className={classes.individualWrapper}>
          <p>Phone Alert</p>
          <button onClick={() => toggle(3)} style={t3=='ON'?{backgroundColor:'red'}:{}}>{t3}</button>
        </div>
        <div className={classes.individualWrapper}>
          <p>Idle Alert</p>
          <button onClick={() => toggle(4)} style={t4=='ON'?{backgroundColor:'red'}:{}}>{t4}</button>
        </div>
        <div className={classes.individualWrapper}>
          <p></p>
          <button onClick={() => showModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
