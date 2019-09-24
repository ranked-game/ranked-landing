// Styles
import Styles from './styles.module.scss';

// Instruments
const Logo = '../../static/assets/svg/logoGroup.svg';

const Navbar = ({ toggleModal, content: { anchors, download, signin } }) => {
    const windowsUser = window.navigator.platform === 'Win32';
    // const windowsUser = false;

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
            {windowsUser ? (
                <a
                    href="https://www.overwolf.com/app/Ranked_Game-Ranked"
                    target="_blank"
                    className={Styles.download}
                >
                    {download}
                </a>
            ) : (
                <button className={Styles.download} onClick={toggleModal}>
                    {signin}
                </button>
            )}
        </div>
    );
};
export default Navbar;
