// Styles
import Styles from './styles.module.scss';

// Instruments
const Logo = '../../static/assets/svg/logoGroup.svg';

const Navbar = ({ content: { anchors, download, signin } }) => {
    const windowsUser = window.navigator.platform === 'Win32';

    return (
        <div className={Styles.container}>
            <img className={Styles.logo} src={Logo} alt={'logo'} />
            <div className={Styles.anchorContainer}>
                {anchors.map((item, index) => (
                    <a className={Styles.anchor} key={index}>
                        {item}
                    </a>
                ))}
            </div>

            {/* костиль, бо мені лінь в стилі лізти */}
            <div />
            <a className={Styles.download}>{windowsUser ? download : signin}</a>
        </div>
    );
};
export default Navbar;
