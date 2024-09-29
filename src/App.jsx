import { useState } from "react";
import classes from "./App.module.css";
import Navbar from "./Navbar/Navbar";
import Tiles from "./Tiles/Tiles";
import Modal from "./Modal/Modal";
function App() {
  const [gunCount, setGunCount] = useState(0);
  const [uniformCount, setUnifomCount] = useState(0);
  const [mobileCount, setMobileCount] = useState(0);
  const [idleCount, setIdleCount] = useState(0);

  const [gunColor, setGunColor] = useState("#13b4f4");
  const [uniformColor, setUnifomColor] = useState("#13b4f4");
  const [mobileColor, setMobileColor] = useState("#13b4f4");
  const [idleColor, setIdleColor] = useState("#13b4f4");

  const [alertCount, setAlertCount] = useState(0);

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
        setGunCount={setGunCount}
        setUnifomCount={setUnifomCount}
        setMobileCount={setMobileCount}
        setIdleCount={setIdleCount}
        gunColor={gunColor}
        uniformColor={uniformColor}
        mobileColor={mobileColor}
        idleColor={idleColor}
        setGunColor={setGunColor}
        setUnifomColor={setUnifomColor}
        setMobileColor={setMobileColor}
        setIdleColor={setIdleColor}
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
        ></Modal>
      )}
    </div>
  );
}

export default App;
