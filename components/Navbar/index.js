import Styles from './styles.module.scss';
// import { BlockWithPhone } from '../BlockWithPhone';
import Logo from '../../static/assets/images/logoGroup.png';
// import Logo from '../../static/assets/logoGroup.svg';

const Navbar = () => (
	<div className={Styles.container}>
		<img className={Styles.logo} src={Logo} alt={'logo'} />
		<div className={Styles.containerBtnUrl}>
			<button className={Styles.btnUrl}>Games avaible</button>
			<button className={Styles.btnUrl}>Features</button>
			<button className={Styles.btnUrl}>What you will get</button>
		</div>
		<div className={Styles.containerBtnDwnl}>
			<button className={Styles.btnUrl}>Sign In/Up</button>
			<button className={Styles.btnDwnl}>Download</button>
		</div>
	</div>
);

export default Navbar;
