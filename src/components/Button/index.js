import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
// ...passProps : lay het nhung prop ma ta them vao
function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  leftIcon,
  rightIcon,
  className,
  children,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // xóa event listener
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to; // link noi bo
    Comp = Link;
  } else if (href) {
    props.href = href; // link ra trang web khac
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    text,
    rounded,
    disabled,
    large,
    leftIcon,
    rightIcon,
  });

  // className nay ko co s nha
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
