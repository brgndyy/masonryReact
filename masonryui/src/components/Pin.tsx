import classes from "./Pin.module.css";

type size = {
  size: string;
};

export default function Pin({ size }: size) {
  return <div className={classes.pin}>Pin</div>;
}
