// Styles
import Styles from './styles.module.scss';
// Instruments
import Fade from 'react-reveal/Fade';

const JoinContainer = () => (
	<div className={Styles.container}>
		<Fade bottom>
			<div className={Styles.bigText}>Want ot join closed beta?</div>
			<div className={Styles.paragraph}>
				Join closed beta testing now, help us in developing somthing cool and get cool
				bonuses
			</div>
			<div className={Styles.buttons}>
				<button className={Styles.buttonViolet}>Try beta</button>
				<button className={Styles.buttonOrange}>Download</button>
			</div>
		</Fade>
	</div>
);
export default JoinContainer;
