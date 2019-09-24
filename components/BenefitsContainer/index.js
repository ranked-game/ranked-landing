// Instruments
import Benefit from '../Benefit';
import Fade from 'react-reveal/Fade';

// Styles
import Styles from './styles.module.scss';

const benefit = '../../static/assets/svg/';

const BenefitsContainer = ({ content, title }) => (
    <div className={Styles.container} id="For testers">
        <Fade bottom>
            <div className={Styles.bigText}>{title}</div>
            <Benefit
                imgUrl={benefit + 'benefit' + 1 + '.svg'}
                text={content[0]}
                position="left"
                dots={true}
            />
            <Benefit
                imgUrl={benefit + 'benefit' + 2 + '.svg'}
                text={content[1]}
                position="right"
                dots={true}
            />
            <Benefit
                imgUrl={benefit + 'benefit' + 3 + '.svg'}
                text={content[2]}
                position="left"
                dots={true}
            />
            <Benefit
                imgUrl={benefit + 'benefit' + 4 + '.svg'}
                text={content[3]}
                position="right"
                dots={false}
            />
        </Fade>
    </div>
);

export default BenefitsContainer;
