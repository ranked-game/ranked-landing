import Styles from './styles.module.scss';

const dotterLine = '../../static/assets/svg/dotterLine.svg';

const Benefit = (props) => (
	<div className={Styles.container}>
		{props.position === 'right' ? (
			<div className={Styles.right}>
				<img className={Styles.imgBenefit} src={props.imgUrl} alt={'img'} />
				<div className={Styles.text}>{props.text}</div>
			</div>
		) : (
			<div className={Styles.left}>
				<div className={Styles.text}>{props.text}</div>
				<img className={Styles.imgBenefit} src={props.imgUrl} alt={'img'} />
			</div>
		)}
		{props.dots && <img className={Styles.dotterLine} src={dotterLine} alt={'img'} />}
	</div>
);

export default Benefit;
