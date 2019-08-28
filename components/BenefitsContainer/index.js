import Benefit from '../Benefit';
import Styles from './styles.module.scss';

const benefit = '../../static/assets/svg/';

const BenefitsContainer = () => (
	<div className={Styles.container}>
		<div className={Styles.bigText}>WHAT WILL YOU GET ?</div>
		<Benefit
			imgUrl={benefit + 'benefit' + 1 + '.svg'}
			text="Early access"
			position="left"
			dots={true}
		/>
		<Benefit
			imgUrl={benefit + 'benefit' + 2 + '.svg'}
			text="All testers are getting “prizes” by the end of beta"
			position="right"
			dots={true}
		/>
		<Benefit
			imgUrl={benefit + 'benefit' + 3 + '.svg'}
			text="Best ones are something additional bonuses"
			position="left"
			dots={true}
		/>
		<Benefit
			imgUrl={benefit + 'benefit' + 4 + '.svg'}
			text="Join a team to conquer the world"
			position="right"
			dots={false}
		/>
	</div>
);

export default BenefitsContainer;
