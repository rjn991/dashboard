import { useState } from "react";
import classes from "./Tiles.module.css";
import gun from "../assets/gun.svg";
import uniform from "../assets/uniform.svg";
import mobile from "../assets/mobile.svg";
import idle from "../assets/idle.svg";

const Tiles = ({gunCount,uniformCount,mobileCount,idleCount,gunColor,uniformColor,mobileColor,idleColor}) => {
  return (
    <div className={classes.tileWrapper}>
      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>
          <p className={classes.heading}>Fuel Gun Holding Time Alert</p>
          <div className={classes.gridItemWrapper}>
            <div className={classes.imageDiv}>
              <img
                className={classes.alertIcon}
                style={{ backgroundColor: gunColor }}
                src={gun}
              ></img>
            </div>

            <div className={classes.gridContent}>
              <p>
                Alerts when an employee holds the fuel dispenser gun for an
                extended period without dispensing fuel.
              </p>
              <br></br>
              <p className={classes.alertCount}>Alert Count : {gunCount}</p>
            </div>
          </div>
        </div>

        <div className={classes.gridItem}>
          <p className={classes.heading}>Uniform Compliance Alert</p>
          <div className={classes.gridItemWrapper}>
            <div className={classes.imageDiv}>
              <img
                className={classes.alertIcon}
                style={{ backgroundColor: uniformColor }}
                src={uniform}
              ></img>
            </div>

            <div className={classes.gridContent}>
              <p>Alerts when an employee is not wearing the required uniform</p>
              <br></br>
              <p className={classes.alertCount}>Alert Count : {uniformCount}</p>
            </div>
          </div>
        </div>

        <div className={classes.gridItem}>
          <p className={classes.heading}>Mobile Phone Usage Alert</p>
          <div className={classes.gridItemWrapper}>
            <div className={classes.imageDiv}>
              <img
                className={classes.alertIcon}
                style={{ backgroundColor: mobileColor }}
                src={mobile}
              ></img>
            </div>

            <div className={classes.gridContent}>
              <p>
                Alerts if an employee is using a mobile phone in restricted
                areas, like near fuel pumps.
              </p>
              <br></br>
              <p className={classes.alertCount}>Alert Count : {mobileCount}</p>
            </div>
          </div>
        </div>

        <div className={classes.gridItem}>
          <p className={classes.heading}>Employee Inactivity Alert</p>
          <div className={classes.gridItemWrapper}>
            <div className={classes.imageDiv}>
              <img
                className={classes.alertIcon}
                style={{ backgroundColor: idleColor }}
                src={idle}
              ></img>
            </div>

            <div className={classes.gridContent}>
              <p>
                Alerts when employees are idle for a prolonged period without
                performing tasks.
              </p>
              <br></br>
              <p className={classes.alertCount}>Alert Count : {idleCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tiles;
