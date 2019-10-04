//Core
import React from 'react';
import Router from 'next/router';
import withFBQ from 'next-fbq';
import withGA from 'next-ga';

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
import SignupForm from '../components/_modals/SignupForm';

//Style
import Styles from '../theme/styles/index.scss';

//Instruments
import Firebase from '../utils/firebase';
import jsonData from '../utils/content';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Portal } from 'react-portal';
import metaContent from '../utils/title-descr.json';

@withGA('UA-146482685-1', Router)
@withFBQ('2688862331146975', Router)
class Home extends React.Component {
    state = {
        scrollToTop: false,
        loaded: false,
        modalForm: false,
        content: {},
    };

    componentDidMount = async () => {
        window.addEventListener('scroll', this._onScroll);

        const userLang = navigator.language.split('-')[0];
        // if (userLang === ('uk' || 'ru')) {
        //     return (window.location = `/${userLang}`);
        // }

        const db = Firebase.firestore();

        const collection = await db.collection('multilang').get();
        collection.forEach((doc) => {
            const { landingBeta } = doc.data();

            this.setState({
                content: landingBeta[userLang],
                loaded: true,
            });
        });

        //? uncomment (and comment-out after compiling) when content.json was updated
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
            modalForm,
            content: { navbar, startupPage, features, benefits, join },
        } = this.state;
        const { Title, Description } = metaContent;

        return (
            <div className={Styles.container}>
                {loaded ? (
                    <>
                        <Head title={Title.EN} description={Description.EN} />
                        {scrollToTop && (
                            <a className={Styles.toTop} onClick={this.scrollToTop} title="top">
                                ⮝
                            </a>
                        )}
                        <Navbar
                            content={navbar}
                            toggleModal={this._toggleModal}
                            scrollToTop={scroll.scrollToTop}
                        />
                        <StartupPage
                            content={startupPage}
                            button={navbar.download}
                            signin={navbar.signin}
                            toggleModal={this._toggleModal}
                        />
                        <SupportedGamesContainer title={navbar.anchors[0]} />
                        <FeaturesContainer content={features} title={navbar.anchors[1]} />
                        <BenefitsContainer content={benefits} title={navbar.anchors[2]} />
                        <JoinContainer
                            content={join}
                            button={navbar.download}
                            signin={navbar.signin}
                            toggleModal={this._toggleModal}
                        />
                        <Footer content={navbar} scrollToTop={scroll.scrollToTop} />
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
export default Home;
