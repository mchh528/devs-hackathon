import classes from "./overlay.module.css";

function Overlay(props) {
  function playHandler() {
    props.onPlay();
  }

  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className={classes.overlay}>
      <p>New Challenge</p>
      <button className={classes.playBtn} onClick={playHandler}>
        Play
      </button>
      <button className={classes.cancelBtn} onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
}

export default Overlay;
