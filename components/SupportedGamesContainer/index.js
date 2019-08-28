import Styles from './styles.module.scss';

const dotaMain = '/static/assets/images/dotaBanner.png';
const lolMain = '/static/assets/images/lolBanner.png';
const dotaLogo = '/static/assets/svg/dotaLogo.svg';
const lolLogo = '/static/assets/svg/lolLogo.svg';

const SupportedGamesContainer = () => (
	<div className={Styles.container}>
		<div className={Styles.bigText}>Games that we support</div>
		<div className={Styles.imagesBlock}>
			<div className={Styles.imgMain} style={{ backgroundImage: `url(${dotaMain})` }}>
				{/* <img className={Styles.imgMain} src={dotaMain} alt={'dotaMain'} /> */}
				<img className={Styles.logo} src={dotaLogo} alt={'dotaLogo'} />
			</div>
			<div className={Styles.imgMain} style={{ backgroundImage: `url(${lolMain})` }}>
				{/* <img className={Styles.imgMain} src={lolMain} alt={'lolMain'} /> */}
				<img className={Styles.logo} src={lolLogo} alt={'lolLogo'} />
			</div>
		</div>
	</div>
);

export default SupportedGamesContainer;
