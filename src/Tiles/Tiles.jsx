import { useState } from "react";
import classes from "./Tiles.module.css";
import gun from "../assets/gun.svg";
import uniform from "../assets/uniform.svg";
import mobile from "../assets/mobile.svg";
import idle from "../assets/idle.svg";

const Tiles = () => {

  const [gunCount,setGunCount] = useState(0)
  const [uniformCount,setUnifomCount] = useState(0)
  const [mobileCount,setMobileCount] = useState(0)
  const [idleCount,setIdleCount] = useState(0)

  const [gunColor,setGunColor] = useState("#13b4f4")
  const [uniformColor,setUnifomColor] = useState("#13b4f4")
  const [mobileColor,setMobileColor] = useState("#13b4f4")
  const [idleColor,setIdleColor] = useState("#13b4f4")



  return (
    <div className={classes.tileWrapper}>
      <div class={classes.gridContainer}>
        <div class={classes.gridItem}>
          <p className={classes.heading}>Fuel Gun Holding Time Alert</p>
          <div className={classes.gridItemWrapper}>
            <div className={classes.imageDiv}>
              <img className={classes.alertIcon} style={{ backgroundColor: gunColor }} src={gun}></img>
            </div>

            <div className={classes.gridContent}>
              <p>
                Alerts when an employee holds the fuel dispenser gun for an
                extended period without dispensing fuel.
              </p>
            </div>
          </div>
        </div>

        <div class={classes.gridItem}>
          <p className={classes.heading}>Uniform Compliance Alert</p>
          <div className={classes.gridItemWrapper}>
            <div className={classes.imageDiv}>
              <img className={classes.alertIcon} style={{ backgroundColor: uniformColor }}src={uniform}></img>
            </div>

            <div className={classes.gridContent}>
              <p>Alerts when an employee is not wearing the required uniform</p>
            </div>
          </div>
        </div>

        <div class={classes.gridItem}>
          <p className={classes.heading}>Mobile Phone Usage Alert</p>
          <div className={classes.gridItemWrapper}>
            <div className={classes.imageDiv}>
              <img className={classes.alertIcon} style={{ backgroundColor: mobileColor }}src={mobile}></img>
            </div>

            <div className={classes.gridContent}>
              <p>
                Alerts if an employee is using a mobile phone in restricted
                areas, like near fuel pumps.
              </p>
            </div>
          </div>
        </div>

        <div class={classes.gridItem}>
          <p className={classes.heading}>Employee Inactivity Alert</p>
          <div className={classes.gridItemWrapper}>
            <div className={classes.imageDiv}>
              <img className={classes.alertIcon} style={{ backgroundColor: idleColor }}src={idle}></img>
            </div>

            <div className={classes.gridContent}>
              <p>
              Alerts when employees are idle for a prolonged period without performing tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tiles;
