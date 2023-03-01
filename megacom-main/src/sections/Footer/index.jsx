import React, { useEffect, useState } from 'react';
import './footer.scss';
import axios from 'axios';
const Footer = ({ text, lang }) => {
	const [file, setFile] = useState('');
	useEffect(() => {
		axios
			.get('https://backend.megacom.win/translation/get-policy-file')
			.then((res) => {
				setFile(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<footer className='footer mt section'>
			<div className='footer-main'>
				<h3 className='section__title'>
					{lang === 'uz' ? text[36]?.uz_text : ''}
					{lang === 'Рус' ? text[36]?.ru_text : ''}
					{lang === 'en' ? text[36]?.en_text : ''}
					{lang === 'kz' ? text[36]?.kg_text : ''}
				</h3>
				<a href={file.file}>
					{lang === 'Рус' ? 'Скачать' : ''}
					{lang === 'uz' ? 'Yuklab olish' : ''}
					{lang === 'en' ? 'Download' : ''}
					{lang === 'kz' ? 'Жүктөп алуу' : ''}
				</a>
			</div>
			<div className='footer-bottom'>
				<p>
					{lang === 'uz' ? text[37]?.uz_text : ''}
					{lang === 'Рус' ? text[37]?.ru_text : ''}
					{lang === 'en' ? text[37]?.en_text : ''}
					{lang === 'kz' ? text[37]?.kg_text : ''}
				</p>
				<p className='footer-bottom__2'>
					{lang === 'uz' ? text[49]?.uz_text : ''}
					{lang === 'Рус' ? text[49]?.ru_text : ''}
					{lang === 'en' ? text[49]?.en_text : ''}
					{lang === 'kz' ? text[49]?.kg_text : ''}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
