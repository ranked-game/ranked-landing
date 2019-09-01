import React from 'react';
//Core
import Head from '../components/head';
import Navbar from '../components/Navbar';
import StartupPage from '../components/StartupPage';
import SupportedGamesContainer from '../components/SupportedGamesContainer';
import FeaturesContainer from '../components/FeaturesContainer';
import BenefitsContainer from '../components/BenefitsContainer';
import JoinContainer from '../components/JoinContainer';
import Footer from '../components/Footer';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
//Style
import Styles from '../theme/styles/index.scss';

class Home extends React.Component {
    state = {
        scrollToTop: false,
    };

    componentDidMount = () => {
        window.addEventListener('scroll', this._onScroll);
    };

    scrollToTop = () => {
        scroll.scrollToTop();

        setTimeout(() => {
            this.setState({
                scrollToTop: false,
            });
        }, 3000);
    };

    _onScroll = () => {
        const { scrollToTop } = this.state;

        if (!scrollToTop && window.scrollY > 400) {
            return this.setState({
                scrollToTop: true,
            });
        }
    };

    render() {
        const { scrollToTop } = this.state;

        return (
            <div className={Styles.container}>
                <Head title="Home" />
                {scrollToTop && (
                    <a className={Styles.toTop} onClick={this.scrollToTop} title="top">
                        ⮝
                    </a>
                )}
                <Navbar />
                <StartupPage />
                <SupportedGamesContainer />
                <FeaturesContainer />
                <BenefitsContainer />
                <JoinContainer />
                <Footer />
            </div>
        );
    }
}

export default Home;
