import classes from "./Tiles.module.css";

const Tiles = () => {
  return (
    <div className={classes.tileWrapper}>
      <div class={classes.gridContainer}>
        <div class={classes.gridItem}>
          <p className={classes.heading}>Fuel Gun Holding Time Alert</p>          
        </div>
        <div class={classes.gridItem}>
        <p className={classes.heading}>Uniform Compliance Alert</p>
        </div>
        
        <div class={classes.gridItem}>
        <p className={classes.heading}>Mobile Phone Usage Alert</p>
        </div>
        <div class={classes.gridItem}>
        <p className={classes.heading}>Employee Inactivity Alert</p>
        </div>
      </div>
    </div>
  );
};
export default Tiles;
