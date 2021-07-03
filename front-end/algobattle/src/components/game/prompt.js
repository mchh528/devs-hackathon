import classes from "./prompt.module.css";

function Prompt(props) {
  return (
    <div className={classes.card}>
      <h1 className={classes.text}>{props.title}</h1>
      <p className={classes.text}>{props.description}</p>
    </div>
  );
}

export default Prompt;
