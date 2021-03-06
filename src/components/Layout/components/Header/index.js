import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faEllipsisVertical,
  faKeyboard,
  faLanguage,
  faMagnifyingGlass,
  faQuestionCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import Menu from "../../../Popper/Menu";
import Button from "../../../Button";
import { Wrapper as PopperWrapper } from "../../../Popper";
import images from "../../../../assets/images";
import styles from "./Header.module.scss";
import AccountItem from "../../../AccountItem";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage}/>,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faQuestionCircle}/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts',
    }
]

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  },[]);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="logo tik tok" />

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-results")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx("actions")}>
          <Button text> Upload </Button>
          <Button primary> Log in </Button>

          <Menu items = {[MENU_ITEMS]}>
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical}/>
              </button>
          </Menu>
        </div>
      </div>
    </header>
  ); // target = _blank: mo trong tab moi
  // custom ri??ng 1 button th?? th??m className: className={cx('custom-btn-login')} v??o button v?? custom n?? b??n file Header.module.scss
}

export default Header;
