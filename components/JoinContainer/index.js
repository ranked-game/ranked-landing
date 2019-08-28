import Styles from './styles.module.scss';
import Footer from '../Footer';
const JoinContainer = () => (
	<div className={Styles.container}>
		<div className={Styles.bigText}>Want ot join closed beta?</div>
		<div className={Styles.paragraph}>
			Join closed beta testing now, help us in developing somthing cool and get cool bonuses
		</div>
		<div className={Styles.buttons}>
			<button className={Styles.buttonViolet}>Try beta</button>
			<button className={Styles.buttonOrange}>Download</button>
		</div>
		{/* <Footer /> */}
	</div>
);
export default JoinContainer;
