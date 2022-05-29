import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const cx =classNames.bind(styles);
// ...passProps : lay het nhung prop ma ta them vao
function Button({to, href, primary = false, outline = false , small = false, large = false ,children, onClick, ...passProps}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to){
        props.to = to; // link noi bo
        Comp = Link;
    } else if(href){
        props.href = href; // link ra trang web khac
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
    });
    // className nay ko co s nha
    return ( 
        <Comp className={classes} {...props}> 
            <span>{children}</span>
        </Comp>
     );
}

export default Button;