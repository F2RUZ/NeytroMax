import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from '../../components/Accordion';
import './question.scss';
const Questions = ({ text, lang }) => {
	const [faq, setFaq] = useState([]);
	const [data, setData] = useState([]);
	const [isSmall, setIsSmall] = useState(true);
	let sec_title;

	if (lang === 'uz') {
		sec_title = text[34]?.uz_text;
	}
	if (lang === 'Рус') {
		sec_title = text[34]?.ru_text;
	}
	if (lang === 'en') {
		sec_title = text[34]?.en_text;
	}
	if (lang === 'kz') {
		sec_title = text[34]?.kg_text;
	}
	useEffect(() => {
		axios
			.get('https://backend.megacom.win/translation/get-faqs')
			.then((res) => {
				setFaq(res.data.slice(0, 5));
				setData(res.data);
			});
	}, []);

	const fullData = () => {
		setIsSmall((prev) => !prev);
	};

	useEffect(() => {
		if (isSmall) {
			setFaq(data.slice(0, 5));
		} else {
			setFaq(data);
		}
	}, [isSmall, data]);

	return (
		<section className='question-section question mt'>
			<h3 className='question-section__title'>{sec_title}</h3>
			{lang === 'uz'
				? faq.map((f, i) => {
						return (
							<Accordion key={i} title={f.question_uz}>
								{f.answer_uz}
							</Accordion>
						);
				  })
				: lang === 'Рус'
				? faq.map((f, i) => {
						return (
							<Accordion key={i} title={f.question_ru}>
								{f.answer_ru}
							</Accordion>
						);
				  })
				: lang === 'kz'
				? faq.map((f, i) => {
						return (
							<Accordion key={i} title={f.question_kg}>
								{f.answer_kg}
							</Accordion>
						);
				  })
				: faq.map((f, i) => {
						return (
							<Accordion key={i} title={f.question_kg}>
								{f.answer_kg}
							</Accordion>
						);
				  })}

			<div onClick={fullData} className='question-section__link mb mt-5'>
				{isSmall ? (
					<button>
						{lang === 'uz' ? text[44]?.uz_text : ''}
						{lang === 'Рус' ? text[44]?.ru_text : ''}
						{lang === 'en' ? text[44]?.en_text : ''}
						{lang === 'kz' ? text[44]?.kg_text : ''}
					</button>
				) : (
					<button>
						{lang === 'uz' ? text[46]?.uz_text : ''}
						{lang === 'Рус' ? text[46]?.ru_text : ''}
						{lang === 'en' ? text[46]?.en_text : ''}
						{lang === 'kz' ? text[46]?.kg_text : ''}
					</button>
				)}
			</div>
		</section>
	);
};

export default Questions;
