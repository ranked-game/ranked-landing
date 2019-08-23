import Styles from './styles.module.scss';
const Logo = '../../static/assets/svg/logoGroup.svg';
const linkedin = '../../static/assets/svg/logoLinkedIn.svg';
const facebook = '../../static/assets/svg/logoFb.svg';
const tw = '../../static/assets/svg/logoTw.svg';

const Footer = () => (
	<div className={Styles.container}>
		<img className={Styles.logo} src={Logo} alt={'logo'} />
		<div className={Styles.containerBtnUrl}>
			<button className={Styles.btnUrl}>Games avaible</button>
			<button className={Styles.btnUrl}>Features</button>
			<button className={Styles.btnUrl}>What you will get</button>
		</div>
		<div className={Styles.contacts}>
			<img src={tw} alt={'tw'} />
			<img src={facebook} alt={'facebook'} />
			<img src={linkedin} alt={'linkedin'} />
		</div>
	</div>
);

export default Footer;
