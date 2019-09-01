// Styles
import Styles from './styles.module.scss';

const Logo = '../../static/assets/svg/logoGroup.svg';

const Navbar = ({ content: { anchors, download, signin } }) => (
    <div className={Styles.container}>
        <img className={Styles.logo} src={Logo} alt={'logo'} />
        <div className={Styles.anchorContainer}>
            {anchors.map((item, index) => (
                <a className={Styles.anchor} key={index}>
                    {item}
                </a>
            ))}
        </div>
        <a className={Styles.signup}>{signin}</a>
        <a className={Styles.download}>{download}</a>
    </div>
);
export default Navbar;
