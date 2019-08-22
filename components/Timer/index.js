import Styles from './styles.module.scss';

const Timer = () => (
	<div className={Styles.containerTimer}>
		<div className={Styles.block}>
			<div className={Styles.time}>59</div>
			<div className={Styles.nameTime}>Days</div>
		</div>
		<div className={Styles.twoPoints}>:</div>

		<div className={Styles.block}>
			<div className={Styles.time}>23</div>
			<div className={Styles.nameTime}>Hours</div>
		</div>

		<div className={Styles.twoPoints}>:</div>
		<div className={Styles.block}>
			<div className={Styles.time}>15</div>
			<div className={Styles.nameTime}>Minutes</div>
		</div>
		<div className={Styles.twoPoints}>:</div>

		<div className={Styles.block}>
			<div className={Styles.time}>49</div>
			<div className={Styles.nameTime}>Seconds</div>
		</div>
	</div>
);

export default Timer;
