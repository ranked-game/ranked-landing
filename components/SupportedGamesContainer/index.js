import Styles from './styles.module.scss';

// import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const dotaMain = '/static/assets/images/dotaBanner.png';
const lolMain = '/static/assets/images/lolBanner.png';
const dotaLogo = '/static/assets/svg/dotaLogo.svg';
const lolLogo = '/static/assets/svg/lolLogo.svg';

class SupportedGamesContainer extends React.Component {
	state = { isHide: false, top: 0 };
	sendNode = (node) => {
		this.setState({
			top: Math.abs(window.scrollY - Math.abs(node.getBoundingClientRect().top)),
		});
	};
	hideBar = () => {
		const { top } = this.state;
		if (top - window.outerWidth * 0.5 < window.scrollY) {
			this.setState({ isHide: true });
		} else this.setState({ isHide: false });
	};
	componentDidMount() {
		window.addEventListener('scroll', this.hideBar);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.hideBar);
	}
	render() {
		return (
			<div ref={this.sendNode} className={Styles.container}>
				<Zoom when={this.state.isHide}>
					<div className={Styles.bigText}>Games that we support</div>
					<div className={Styles.imagesBlock}>
						<div
							className={Styles.imgMain}
							style={{ backgroundImage: `url(${dotaMain})` }}
						>
							<img className={Styles.logo} src={dotaLogo} alt={'dotaLogo'} />
						</div>
						<div
							className={Styles.imgMain}
							style={{ backgroundImage: `url(${lolMain})` }}
						>
							<img className={Styles.logo} src={lolLogo} alt={'lolLogo'} />
						</div>
					</div>
				</Zoom>
			</div>
		);
	}
}

export default SupportedGamesContainer;
