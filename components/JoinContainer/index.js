import Styles from './styles.module.scss';
import Footer from '../Footer';
const JoinContainer = () => (
	<div className={Styles.container}>
		<div className={Styles.bigText}>Want ot join closed beta?</div>
		<div className={Styles.paragraph}>
			{' '}
			Join closed beta testing now, help us in developing somthing cool and get cool bonuses
		</div>
		<div className={Styles.btns}>
			<button className={Styles.fireBtnViolet}>Try beta</button>
			<button className={Styles.fireBtnOrange}>Download</button>
		</div>
		<Footer />
		<hr />
		<div className={Styles.textFooter}>All rights reserved 2019 - Ranked Game</div>
		{/* <img className={Styles.top} src={boxbottom1} alt={'bottom1'} /> */}
	</div>
);
export default JoinContainer;
