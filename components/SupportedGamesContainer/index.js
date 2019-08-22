import Styles from './styles.module.scss';

const boxbottom1 = '/static/assets/images/bottom1.png';

const dotaMain = '/static/assets/svg/dota.svg';
const lolMain = '/static/assets/svg/lol.svg';

const dotaLogo = '/static/assets/svg/dotaLogo.svg';
const lolLogo = '/static/assets/svg/lolLogo.svg';
const SupportedGamesContainer = () => (
	<div>
		<div className={Styles.bigText}>Games that we support</div>
		<img className={Styles.top} src={boxbottom1} alt={'bottom1'} />

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
		<img className={Styles.bottom} src={boxbottom1} alt={'bottom1'} />
	</div>
);

export default SupportedGamesContainer;
