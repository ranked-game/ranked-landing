import React from 'react';
//Core
import Head from '../components/head';
import Navbar from '../components/Navbar';
import StartupPage from '../components/StartupPage';
//Style
import '../theme/styles/index.scss';

const Home = () => (
	<div className="container">
		<Head title="Home" />
		<Navbar />
		<StartupPage />
	</div>
);

export default Home;
