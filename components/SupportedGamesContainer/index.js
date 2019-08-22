import Styles from './styles.module.scss';

const dotaMain = '/static/assets/svg/dota.svg';
const lolMain = '/static/assets/svg/lol.svg';

const dotaLogo = '/static/assets/svg/dotaLogo.svg';
const lolLogo = '/static/assets/svg/lolLogo.svg';
const SupportedGamesContainer = () => (
	<div>
		<div className={Styles.bigText}>Games that we support</div>
		<div className={Styles.container}>
			<div>
				<img className={Styles.imgMain} src={dotaMain} alt={'dotaMain'} />
				<img className={Styles.logoDota} src={dotaLogo} alt={'dotaLogo'} />
			</div>
			<div>
				<img className={Styles.imgMain} src={lolMain} alt={'lolMain'} />
				<img className={Styles.logoLol} src={lolLogo} alt={'lolLogo'} />
			</div>
		</div>
	</div>
);

export default SupportedGamesContainer;
