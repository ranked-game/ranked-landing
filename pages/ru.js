//Core
import React from 'react';
import Router from 'next/router';
import withFBQ from 'next-fbq';

// Components
import Head from '../components/head';
import Navbar from '../components/Navbar';
import StartupPage from '../components/StartupPage';
import SupportedGamesContainer from '../components/SupportedGamesContainer';
import FeaturesContainer from '../components/FeaturesContainer';
import BenefitsContainer from '../components/BenefitsContainer';
import JoinContainer from '../components/JoinContainer';
import Footer from '../components/Footer';
import LoadingPage from '../components/LoadingPage';

//Style
import Styles from '../theme/styles/index.scss';

//Instruments
import Firebase from '../utils/firebase';
import jsonData from '../utils/content';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Portal } from 'react-portal';

class Home extends React.Component {
    state = {
        scrollToTop: false,
        loaded: false,
        modalForm: false,
        content: {},
    };

    componentDidMount = async () => {
        window.addEventListener('scroll', this._onScroll);

        const db = Firebase.firestore();

        const collection = await db.collection('multilang').get();
        collection.forEach((doc) => {
            const {
                landingBeta: { ru },
            } = doc.data();

            this.setState({
                content: ru,
                loaded: true,
            });
        });

        //? uncomment when content.json was updated
        //? to update data at firestore
        // db.collection('multilang')
        //     .doc('landingPage')
        //     .set(jsonData.multilang.landingPage);
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

    _toggleModal = () => {
        this.setState((prevState) => ({
            modalForm: !prevState.modalForm,
        }));
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
                        <StartupPage
                            content={startupPage}
                            button={navbar.download}
                            signin={navbar.signin}
                        />
                        <SupportedGamesContainer title={navbar.anchors[0]} />
                        <FeaturesContainer content={features} title={navbar.anchors[1]} />
                        <BenefitsContainer content={benefits} title={navbar.anchors[2]} />
                        <JoinContainer
                            content={join}
                            button={navbar.download}
                            signin={navbar.signin}
                        />
                        <Footer content={navbar} />
                        {modalForm && (
                            <Portal>
                                <SignupForm toggleModal={this._toggleModal} />
                            </Portal>
                        )}
                    </>
                ) : (
                    <LoadingPage />
                )}
            </div>
        );
    }
}

// export default Home;
export default withFBQ('2688862331146975', Router)(Home);
