import classes from './App.module.css'
import Navbar from './Navbar/Navbar'
import Tiles from './Tiles/Tiles'
function App() {

  return (
    <div className={classes.app}>
      <Navbar></Navbar>
      <Tiles></Tiles>
    </div>
  )
}

export default App
