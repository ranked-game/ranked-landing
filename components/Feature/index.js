import Styles from './styles.module.scss';

// const Logo = '../../static/assets/svg/logoGroup.svg';

const Feature = (props) => (
	<div className={Styles.container}>
		<img className={Styles.imgFeature} src={props.imgUrl} alt={'img'} />
		<div className={Styles.textFeature}>{props.text}</div>
	</div>
);

export default Feature;
