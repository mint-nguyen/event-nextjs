import classes from "./event-detail.module.css";

function EventContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
