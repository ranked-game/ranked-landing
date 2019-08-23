import Styles from './styles.module.scss';

import Benefit from '../Benefit';
const benefit = '../../static/assets/svg/';

const BenefitsContainer = () => (
	<>
		<Benefit imgUrl={benefit + 'benefit' + 1 + '.svg'} text="Early access" position="left" />
		<Benefit
			imgUrl={benefit + 'benefit' + 2 + '.svg'}
			text="All testers are getting “prizes” by the end of beta"
			position="right"
		/>
		<Benefit
			imgUrl={benefit + 'benefit' + 3 + '.svg'}
			text="Best ones are something additional bonuses"
			position="left"
		/>
		<Benefit
			imgUrl={benefit + 'benefit' + 4 + '.svg'}
			text="Join a team to conquer the world"
			position="right"
		/>
	</>
);

export default BenefitsContainer;
