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
//Style
import '../theme/styles/index.scss';

const Home = () => (
	<div className="container">
		<Head title="Home" />
		<Navbar />
		<StartupPage />
		<SupportedGamesContainer />
		<FeaturesContainer />
		<BenefitsContainer />
		<JoinContainer />
	</div>
);

export default Home;
