import { useState,useEffect } from "react";
import classes from "./App.module.css";
import Navbar from "./Navbar/Navbar";
import Tiles from "./Tiles/Tiles";
import Modal from "./Modal/Modal";
function App() {
  const [gunCount, setGunCount] = useState(0);
  const [uniformCount, setUniformCount] = useState(0);
  const [mobileCount, setMobileCount] = useState(0);
  const [idleCount, setIdleCount] = useState(0);

  const [gunColor, setGunColor] = useState("#13b4f4");
  const [uniformColor, setUniformColor] = useState("#13b4f4");
  const [mobileColor, setMobileColor] = useState("#13b4f4");
  const [idleColor, setIdleColor] = useState("#13b4f4");

  const [alertCount, setAlertCount] = useState(0);
  
  useEffect(() => {
    const total = gunCount + uniformCount + mobileCount + idleCount;
    setAlertCount(total);
  }, [gunCount, uniformCount, mobileCount, idleCount,setAlertCount]);
  
  const [modal, showModal] = useState(false);
  const [t1, setT1] = useState("OFF");
  const [t2, setT2] = useState("OFF");
  const [t3, setT3] = useState("OFF");
  const [t4, setT4] = useState("OFF");
  return (
    <div className={classes.app}>
      <Navbar alertCount={alertCount} showModal={showModal}></Navbar>
      <Tiles
        setAlertCount={setAlertCount}
        gunCount={gunCount}
        uniformCount={uniformCount}
        mobileCount={mobileCount}
        idleCount={idleCount}
        gunColor={gunColor}
        uniformColor={uniformColor}
        mobileColor={mobileColor}
        idleColor={idleColor}
      ></Tiles>
      {modal && (
        <Modal
          showModal={showModal}
          t1={t1}
          t2={t2}
          t3={t3}
          t4={t4}
          setT1={setT1}
          setT2={setT2}
          setT3={setT3}
          setT4={setT4}
          setGunCount={setGunCount}
          setUniformCount={setUniformCount}
          setMobileCount={setMobileCount}
          setIdleCount={setIdleCount}
          setGunColor={setGunColor}
          setUniformColor={setUniformColor}
          setMobileColor={setMobileColor}
          setIdleColor={setIdleColor}
        ></Modal>
      )}
    </div>
  );
}

export default App;
