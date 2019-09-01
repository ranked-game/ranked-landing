// Styles
import Styles from './styles.module.scss';
// Instruments
import CompoundTimer from 'react-compound-timer';

const Timer = (props) => {
    const { seconds, values } = props;

    return (
        <div className={Styles.containerTimer}>
            <CompoundTimer
                initialTime={seconds * 1000}
                direction="backward"
                lastUnit="d"
                formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
            >
                <div className={Styles.block}>
                    <div className={Styles.time}>
                        <CompoundTimer.Days />
                    </div>
                    <div className={Styles.nameTime}>{values[0]}</div>
                </div>
                <div className={Styles.twoPoints}>:</div>

                <div className={Styles.block}>
                    <div className={Styles.time}>
                        <CompoundTimer.Hours />
                    </div>
                    <div className={Styles.nameTime}>{values[1]}</div>
                </div>

                <div className={Styles.twoPoints}>:</div>
                <div className={Styles.block}>
                    <div className={Styles.time}>
                        <CompoundTimer.Minutes />
                    </div>
                    <div className={Styles.nameTime}>{values[2]}</div>
                </div>
                <div className={Styles.twoPoints}>:</div>

                <div className={Styles.block}>
                    <div className={Styles.time}>
                        <CompoundTimer.Seconds />
                    </div>
                    <div className={Styles.nameTime}>{values[3]}</div>
                </div>
            </CompoundTimer>
        </div>
    );
};

export default Timer;
