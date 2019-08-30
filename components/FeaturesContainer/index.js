// Styles
import Styles from './styles.module.scss';
// Instruments
import Fade from 'react-reveal/Fade';
import Feature from '../Feature';

const feature = '../../static/assets/svg/';

const FeaturesContainer = () => (
	<div className={Styles.container}>
		<Fade bottom>
			<div className={Styles.bigText}>Features</div>

			<div className={Styles.featureTable}>
				<Feature
					imgUrl={feature + 'feature' + 1 + '.svg'}
					text="Climb up Solo ladders and get 
				prizes for achieving TOP-10"
				/>
				<Feature
					imgUrl={feature + 'feature' + 2 + '.svg'}
					text="If you like to try yourself in 
				teamwork - you may use our Team Finder"
				/>
				<Feature
					imgUrl={feature + 'feature' + 3 + '.svg'}
					text="When you think you're ready to kick asses with your 
				team - feel free to join Team Tournaments"
				/>
				<Feature
					imgUrl={feature + 'feature' + 4 + '.svg'}
					text="Communicate, compete and find 
				your path to professional cybersport arenas"
				/>
			</div>
		</Fade>
	</div>
);

export default FeaturesContainer;
