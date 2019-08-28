import Styles from './styles.module.scss';

const Logo = '../../static/assets/svg/logoGroup.svg';

const Navbar = () => (
    <div className={Styles.container}>
        <img className={Styles.logo} src={Logo} alt={'logo'} />
        <div className={Styles.anchorContainer}>
            <a className={Styles.anchor}>Games avaible</a>
            <a className={Styles.anchor}>Features</a>
            <a className={Styles.anchor}>What you will get</a>
        </div>
        <a className={Styles.signup}>Sign In/Up</a>
        <a className={Styles.download}>Download</a>
    </div>
);

export default Navbar;