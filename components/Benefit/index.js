import Styles from './styles.module.scss';

// const Logo = '../../static/assets/svg/logoGroup.svg';

// const wave = '../../static/assets/images/bottom2.png';

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
	</div>
);

export default Benefit;
