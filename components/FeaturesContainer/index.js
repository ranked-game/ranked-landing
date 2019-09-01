// Styles
import Styles from './styles.module.scss';
// Instruments
import Fade from 'react-reveal/Fade';
import Feature from '../Feature';

const feature = '../../static/assets/svg/';

const FeaturesContainer = ({ content, title }) => (
    <div className={Styles.container}>
        <Fade bottom>
            <div className={Styles.bigText}>{title}</div>

            <div className={Styles.featureTable}>
                <Feature imgUrl={feature + 'feature' + 1 + '.svg'} text={content[0]} />
                <Feature imgUrl={feature + 'feature' + 2 + '.svg'} text={content[1]} />
                <Feature imgUrl={feature + 'feature' + 3 + '.svg'} text={content[2]} />
                <Feature imgUrl={feature + 'feature' + 4 + '.svg'} text={content[3]} />
            </div>
        </Fade>
    </div>
);

export default FeaturesContainer;
