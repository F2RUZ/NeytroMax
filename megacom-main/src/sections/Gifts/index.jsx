import React from 'react';
import './gifts.scss';
import { Link } from 'react-scroll';
import phone from '../../assets/phone-img.png';
import phoneKg from '../../assets/phone-kg.png';
const Gift = ({ text, lang }) => {
	let title,
		card_title1,
		card_title2,
		card_title3,
		price1,
		price2,
		price3,
		text1,
		text2,
		text3,
		participate = '';

	if (lang === 'uz') {
		title = text[9]?.uz_text;
		card_title1 = text[10]?.uz_text;
		card_title2 = text[11]?.uz_text;
		card_title3 = text[12]?.uz_text;
		price1 = text[13]?.uz_text;
		price2 = text[14]?.uz_text;
		price3 = text[15]?.uz_text;
		text1 = text[16]?.uz_text;
		text2 = text[17]?.uz_text;
		text3 = text[18]?.uz_text;
		participate = 'Qatnashish';
	}
	if (lang === 'Рус') {
		title = text[9]?.ru_text;
		card_title1 = text[10]?.ru_text;
		card_title2 = text[11]?.ru_text;
		card_title3 = text[12]?.ru_text;
		price1 = text[13]?.ru_text;
		price2 = text[14]?.ru_text;
		price3 = text[15]?.ru_text;
		text1 = text[16]?.ru_text;
		text2 = text[17]?.ru_text;
		text3 = text[18]?.ru_text;
		participate = 'Участвовать';
	}
	if (lang === 'en') {
		title = text[9]?.en_text;
		card_title1 = text[10]?.en_text;
		card_title2 = text[11]?.en_text;
		card_title3 = text[12]?.en_text;
		price1 = text[13]?.en_text;
		price2 = text[14]?.en_text;
		price3 = text[15]?.en_text;
		text1 = text[16]?.en_text;
		text2 = text[17]?.en_text;
		text3 = text[18]?.en_text;
		participate = 'Participate';
	}
	if (lang === 'kz') {
		title = text[9]?.kg_text;
		card_title1 = text[10]?.kg_text;
		card_title2 = text[11]?.kg_text;
		card_title3 = text[12]?.kg_text;
		price1 = text[13]?.kg_text;
		price2 = text[14]?.kg_text;
		price3 = text[15]?.kg_text;
		text1 = text[16]?.kg_text;
		text2 = text[17]?.kg_text;
		text3 = text[18]?.kg_text;
		participate = 'Kатышуу';
	}
	let picture;
	if (lang === 'Рус') {
		picture = (
			<picture>
				<img src={phone} alt='gifts' />
			</picture>
		);
	} else if (lang === 'kz') {
		picture = (
			<picture>
				<img src={phoneKg} alt='gifts' />
			</picture>
		);
	}

	return (
		<section className='section gifts'>
			<h3 className='section__title'>{title}</h3>
			<div className='cards '>
				<div className='gift-card'>
					<p className='gift-card__price'>{price1}</p>
					<h4 className='gift-card__title'>{card_title1}</h4>
					<p className='gift-card__subtitle'>{text1}</p>
					<Link
						to='form'
						spy={true}
						smooth={true}
						offset={50}
						duration={2000}>
						<button className='gift-card__button'>
							{participate} <span>&#8594;</span>
						</button>
					</Link>
				</div>
				<div className='gift-card'>
					<p className='gift-card__price'>{price2}</p>
					<h4 className='gift-card__title'>{card_title2}</h4>
					<p className='gift-card__subtitle'>{text2}</p>
					<Link
						to='form'
						spy={true}
						smooth={true}
						offset={50}
						duration={2000}>
						<button className='gift-card__button'>
							{participate} <span>&#8594;</span>
						</button>
					</Link>
				</div>
				<div className='gift-card'>
					<p className='gift-card__price'>{price3}</p>
					<h4 className='gift-card__title'>{card_title3}</h4>
					<p className='gift-card__subtitle'>{text3}</p>
					<Link
						to='form'
						spy={true}
						smooth={true}
						offset={50}
						duration={2000}>
						<button className='gift-card__button'>
							{participate} <span>&#8594;</span>
						</button>
					</Link>
				</div>
			</div>
			<div className='mobile__section'>{picture}</div>
		</section>
	);
};

export default Gift;
