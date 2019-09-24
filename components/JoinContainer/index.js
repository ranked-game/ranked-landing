// Styles
import Styles from './styles.module.scss';

// Instruments
import Fade from 'react-reveal/Fade';

const JoinContainer = ({ content: { title, subtitle }, button, signin }) => {
    const windowsUser = window.navigator.platform === 'Win32';

    return (
        <div className={Styles.container}>
            <Fade bottom>
                <div className={Styles.bigText}>{title}</div>
                <div className={Styles.paragraph}>{subtitle}</div>
                <div className={Styles.buttons}>
                    {windowsUser ? (
                        <a
                            href="https://www.overwolf.com/app/Ranked_Game-Ranked"
                            target="_blank"
                            className={Styles.buttonOrange}
                        >
                            {button}
                        </a>
                    ) : (
                        <button className={Styles.buttonOrange}>{signin}</button>
                    )}
                </div>
            </Fade>
        </div>
    );
};
export default JoinContainer;
