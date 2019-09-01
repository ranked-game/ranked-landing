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

//Instruments
import Firebase from '../utils/firebase';

class Home extends React.Component {
    state = {
        scrollToTop: false,
        loaded: false,
        content: {},
    };

    componentDidMount = async () => {
        window.addEventListener('scroll', this._onScroll);

        const db = Firebase.firestore();

        const collection = await db.collection('multilang').get();
        collection.forEach((doc) => {
            const {
                landingBeta: { ua },
            } = doc.data();

            this.setState({
                content: ua,
                loaded: true,
            });
        });
    };

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    _onScroll = () => {
        const { scrollToTop } = this.state;

        if (!scrollToTop && window.scrollY > 400) {
            return this.setState({
                scrollToTop: true,
            });
        }

        if (scrollToTop && window.scrollY < 200) {
            return this.setState({
                scrollToTop: false,
            });
        }
    };

    render() {
        const {
            scrollToTop,
            loaded,
            content: { navbar, startupPage, features, benefits, join },
        } = this.state;

        return (
            <div className={Styles.container}>
                {loaded ? (
                    <>
                        <Head title="Home" />
                        {scrollToTop && (
                            <a className={Styles.toTop} onClick={this.scrollToTop} title="top">
                                ⮝
                            </a>
                        )}
                        <Navbar content={navbar} />
                        <StartupPage content={startupPage} button={navbar.download} />
                        <SupportedGamesContainer title={navbar.anchors[0]} />
                        <FeaturesContainer content={features} title={navbar.anchors[1]} />
                        <BenefitsContainer content={benefits} title={navbar.anchors[2]} />
                        <JoinContainer content={join} />
                        <Footer content={navbar} />
                    </>
                ) : (
                    <div>loading.....</div>
                )}
            </div>
        );
    }
}

export default Home;
