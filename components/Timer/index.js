import Styles from './styles.module.scss';

import CompoundTimer from 'react-compound-timer';

const Timer = (props) => {
	const { seconds } = props;

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
					<div className={Styles.nameTime}>Days</div>
				</div>
				<div className={Styles.twoPoints}>:</div>

				<div className={Styles.block}>
					<div className={Styles.time}>
						<CompoundTimer.Hours />
					</div>
					<div className={Styles.nameTime}>Hours</div>
				</div>

				<div className={Styles.twoPoints}>:</div>
				<div className={Styles.block}>
					<div className={Styles.time}>
						<CompoundTimer.Minutes />
					</div>
					<div className={Styles.nameTime}>Minutes</div>
				</div>
				<div className={Styles.twoPoints}>:</div>

				<div className={Styles.block}>
					<div className={Styles.time}>
						<CompoundTimer.Seconds />
					</div>
					<div className={Styles.nameTime}>Seconds</div>
				</div>
			</CompoundTimer>
		</div>
	);
};

export default Timer;
