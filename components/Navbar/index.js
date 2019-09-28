// Styles
import Styles from './styles.module.scss';

// Instruments
const Logo = '../../static/assets/svg/logoHorizontal.svg';
import { Link } from 'react-scroll';

const Navbar = ({
    scrollToSupportedGames,
    toggleModal,
    scrollToTop,
    content: { anchors, download, signin },
}) => {
    // const windowsUser = window.navigator.platform === 'Win32';
    const windowsUser = false;

    return (
        <div className={Styles.container}>
            <img className={Styles.logo} src={Logo} alt={'logo'} onClick={scrollToTop} />
            <div className={Styles.anchorContainer}>
                {anchors.map((item, index) => (
                    <Link
                        className={Styles.anchor}
                        key={index}
                        to={item}
                        offset={-14 * 5.5}
                        smooth={true}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* костиль, бо мені лінь в стилі лізти */}
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
