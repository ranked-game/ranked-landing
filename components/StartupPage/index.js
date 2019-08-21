import Styles from './styles.module.scss';
import Dashboard from '../../static/assets/images/dashboards.png';
import Logo from '../../static/assets/images/logoGroup.png';
const StartupPage = () => (
	<div className={Styles.container}>
		<div className={Styles.topLinear} />
		<div className={Styles.bottomLinear} />
		<div className={Styles.infoBlock}>
			<div />
		</div>
		<img className={Styles.logo} src={Logo} alt={'logo'} />

		<img className={Styles.dashboardImg} src={Dashboard} alt={'dashboard'} />
	</div>
);

export default StartupPage;
