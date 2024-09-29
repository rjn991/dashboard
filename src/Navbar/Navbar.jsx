import classes from "./Navbar.module.css";
import { useState, useEffect } from "react";
const Navbar = ({ alertCount, showModal }) => {
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className={classes.navbarwrapper}>
      <div className={classes.left}>
        <h1>Dashboard</h1>
      </div>
      <div className={classes.right}>
        <p> count {alertCount}</p>
        <p style={{cursor:'pointer',textDecoration:'underline'}} onClick={()=>showModal(true)}>Toggle</p>
        <p>{currTime}</p>
      </div>
    </div>
  );
};
export default Navbar;
