import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import stylles from './AccountItem.module.scss';

const cx = classNames.bind(stylles);
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src = "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1653994800&x-signature=0IK52oD%2B5avc3zipUC%2BYjGHnUQ4%3D" alt= "avatar" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Thi Huyen Trang</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>

                <span className={cx('username')}>trangnguyen</span>
            </div>
        </div>
     );
}

export default AccountItem;