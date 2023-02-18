import Pin from "./Pin";
import classes from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={classes.pin_container}>
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="large" />
    </div>
  );
}
