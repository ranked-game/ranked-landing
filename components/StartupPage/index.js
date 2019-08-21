import Styles from './styles.module.scss';
// import { BlockWithPhone } from '../BlockWithPhone';

//Instruments
import img from '../../theme/svg/logo.png';

const StartupPage = () => (
	<div
		className={Styles.container}
		style={{
			backgroundImage: img,
		}}
	>
		<div className={Styles.topLinear} />
		<div className={Styles.bottomLinear} />
	</div>
);

export default StartupPage;
