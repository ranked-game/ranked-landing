// Styles
import Styles from './styles.module.scss';

// Instruments
import { Link } from 'react-scroll';

const Logo = '../../static/assets/svg/logoHorizontal.svg';
const linkedin = '../../static/assets/svg/logoLinkedIn.svg';
const facebook = '../../static/assets/svg/logoFb.svg';
const tw = '../../static/assets/svg/logoTw.svg';

const Footer = ({ content: { anchors }, scrollToTop }) => (
    <>
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
            <div className={Styles.contacts}>
                <a href="https://discord.gg/xtKD9U" target="_blank">
                    <img className={Styles.icon} src={tw} alt={'tw'} />
                </a>
                <a href="https://www.facebook.com/Ranked-Game-106886087345863/" target="_blank">
                    <img className={Styles.icon} src={facebook} alt={'facebook'} />
                </a>
                {/* <img className={Styles.icon} src={linkedin} alt={'linkedin'} /> */}
            </div>
        </div>
        <hr />
        <div className={Styles.textFooter}>All rights reserved 2019 - Ranked Game</div>
    </>
);

export default Footer;
