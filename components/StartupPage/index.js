import Timer from '../../components/Timer';
import Styles from './styles.module.scss';

const Dashboard = '/static/assets/images/dashboard.png';
const boxbottom1 = '/static/assets/images/bottom1.png';
const boxbottom2 = '/static/assets/images/bottom2.png';

const StartupPage = () => (
	<div className={Styles.container}>
		<div className={Styles.table}>
			<div className={Styles.infoBlock}>
				<div className={Styles.bigText}>lead the competition and win prizes</div>
				<div className={Styles.p1}>
					Our application is in beta testing, become one of the first players and get
					prizes.
				</div>
				<div className={Styles.p2}>Time to open beta:</div>
				<Timer />
				<div className={Styles.btns}>
					<button className={Styles.fireBtnViolet}>Try beta</button>
					<button className={Styles.fireBtnOrange}>Download</button>
				</div>
			</div>

			<img className={Styles.dashboardImg} src={Dashboard} alt={'dashboard'} />
		</div>
		<img className={Styles.wave} src={boxbottom2} alt={'bottom2'} />
	</div>
);

export default StartupPage;
