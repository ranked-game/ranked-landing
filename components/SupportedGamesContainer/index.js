// Styles
import Styles from './styles.module.scss';
// Instruments
import Fade from 'react-reveal/Fade';

const dotaMain = '/static/assets/images/dotaBanner.png';
const lolMain = '/static/assets/images/lolBanner.png';
const dotaLogo = '/static/assets/svg/dotaLogo.svg';
const lolLogo = '/static/assets/svg/lolLogo.svg';

const SupportedGamesContainer = () => (
	<div className={Styles.container}>
		<Fade bottom>
			<div className={Styles.bigText}>Games that we support</div>
			<div className={Styles.imagesBlock}>
				<div className={Styles.imgMain} style={{ backgroundImage: `url(${dotaMain})` }}>
					<img className={Styles.logo} src={dotaLogo} alt={'dotaLogo'} />
				</div>
				<div className={Styles.imgMain} style={{ backgroundImage: `url(${lolMain})` }}>
					<img className={Styles.logo} src={lolLogo} alt={'lolLogo'} />
				</div>
			</div>
		</Fade>
	</div>
);

export default SupportedGamesContainer;
