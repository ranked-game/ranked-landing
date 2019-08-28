import Styles from './styles.module.scss';
const Logo = '../../static/assets/svg/logoGroup.svg';
const linkedin = '../../static/assets/svg/logoLinkedIn.svg';
const facebook = '../../static/assets/svg/logoFb.svg';
const tw = '../../static/assets/svg/logoTw.svg';

const Footer = () => (
	<>
		<div className={Styles.container}>
			<img className={Styles.logo} src={Logo} alt={'logo'} />
			<div className={Styles.anchorContainer}>
				<a className={Styles.anchor}>Games avaible</a>
				<a className={Styles.anchor}>Features</a>
				<a className={Styles.anchor}>What you will get</a>
			</div>
			<div className={Styles.contacts}>
				<img src={tw} alt={'tw'} />
				<img src={facebook} alt={'facebook'} />
				<img src={linkedin} alt={'linkedin'} />
			</div>
			
		</div>
		<hr />
		<div className={Styles.textFooter}>All rights reserved 2019 - Ranked Game</div>
	</>
);

export default Footer;
