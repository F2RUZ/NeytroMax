import React, { useEffect, useState } from 'react';

import WOW from 'wowjs';
import axios from 'axios';

import Header from './sections/Header';
import Hero from './sections/Hero';
import Gift from './sections/Gifts';
import WinnersList from './sections/Winners';
import Registration from './sections/Registration';
import Questions from './sections/Question';
import FormSection from './sections/Form';
import Footer from './sections/Footer';

import Loader from './components/Loader';

import './Home.scss';

const HomePage = () => {
	const [load, setLoad] = useState(true);
	const [text, setText] = useState([]);

	const [lang, setLang] = useState('Рус');

	useEffect(() => {
		setLoad(true);
		new WOW.WOW({
			live: false,
		}).init();

		axios
			.get('https://backend.megacom.win/translation/get-words')
			.then((res) => {
				setText(res.data);
				setLoad(false);
			});
	}, []);

	useEffect(() => {
		if (localStorage.getItem('lang')) {
			setLang(localStorage.getItem('lang'));
		}
		setLoad(false);
	}, [load]);

	if (load) return <Loader />;
	return (
		<div className='custom-container'>
			<Header
				load={load}
				text={text}
				lang={lang}
				setLoad={setLoad}
				setLang={setLang}
			/>
			<Hero load={load} setLoad={setLang} text={text} lang={lang} />
			<Gift text={text} lang={lang} />
			<WinnersList text={text} lang={lang} />
			<Registration text={text} lang={lang} />
			<Questions text={text} lang={lang} />
			<FormSection text={text} lang={lang} />
			<Footer text={text} lang={lang} />
		</div>
	);
};

export default HomePage;
