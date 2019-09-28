// Styles
import Styles from './styles.module.scss';
// Instruments
import Fade from 'react-reveal/Fade';

const dotaMain = '/static/assets/images/dotaBanner.png';
const r6sMain = '/static/assets/images/r6sBanner.jpg';
const dotaLogo = '/static/assets/svg/dotaLogo.svg';
const r6sLogo = '/static/assets/images/rs6Logo.png';

const SupportedGamesContainer = ({ title }) => (
    <div className={Styles.container} id="Supported games">
        <Fade bottom>
            <div className={Styles.bigText}>{title}</div>
            <div className={Styles.imagesBlock}>
                <div className={Styles.imgMain} style={{ backgroundImage: `url(${dotaMain})` }}>
                    <img className={Styles.logo} src={dotaLogo} alt={'dotaLogo'} />
                </div>
                <div className={Styles.imgMain} style={{ backgroundImage: `url(${r6sMain})` }}>
                    <img className={Styles.logoR6s} src={r6sLogo} alt={'r6sLogo'} />
                </div>
            </div>
        </Fade>
    </div>
);

export default SupportedGamesContainer;
