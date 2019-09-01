// Styles
import Styles from './styles.module.scss';

// Instruments
import Spinner from '../Spinner';
const logo = '../../static/assets/svg/pseudoLogoBig.svg';

const LoadingPage = () => (
    <section className={Styles.container}>
        <img src={logo} alt="" />
        <Spinner size="5rem" loader />
    </section>
);

export default LoadingPage;
