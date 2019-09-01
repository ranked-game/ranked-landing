// Styles
import Styles from './styles.module.scss';
// Instruments
import Fade from 'react-reveal/Fade';

const JoinContainer = ({ content: { title, subtitle } }) => (
    <div className={Styles.container}>
        <Fade bottom>
            <div className={Styles.bigText}>{title}</div>
            <div className={Styles.paragraph}>{subtitle}</div>
            <div className={Styles.buttons}>
                {/* <button className={Styles.buttonViolet}>Try beta</button> */}
                <button className={Styles.buttonOrange}>Download</button>
            </div>
        </Fade>
    </div>
);
export default JoinContainer;
