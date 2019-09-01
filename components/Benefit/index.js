// Styles
import Styles from './styles.module.scss';

const dotterLine = '../../static/assets/svg/dotterLine.svg';

const Benefit = (props) => {
    const { imgUrl, text, position, dots } = props;

    return (
        <div className={Styles.container}>
            <div className={Styles[position]}>{text}</div>
            <img className={Styles.imgBenefit} src={imgUrl} alt={'img'} />
            {dots && <img className={Styles.dotterLine} src={dotterLine} alt={'img'} />}
        </div>
    );
};

export default Benefit;
