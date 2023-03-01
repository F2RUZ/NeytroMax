import React from 'react';
import { Link } from 'react-scroll';

import './Hero.scss';
import heroImg from '../../assets/hero-bg-image.png';
import heroTitleImg from '../../assets/hero-title.png';
import heroTitleImgMB from '../../assets/hero-title-mb.png';
import heroTitleKg from '../../assets/hero-title-kg.png';
const Hero = ({ load, lang, setLang, setLoad, text }) => {
	return (
		<section className='hero'>
			<div className='hero__content wow fadeInUp'>
				{lang === 'Рус' ? (
					<picture className='hero__content__picture'>
						<source
							media='(max-width: 769px)'
							srcSet={heroTitleImgMB}
						/>

						<img
							className='wow fadeIn'
							data-wow-duration='0.5s'
							data-wow-delay='0.2s'
							src={heroTitleImg}
							alt='hero-bg'
						/>
					</picture>
				) : (
					''
				)}
				{lang === 'kz' ? (
					<picture className='hero__content__picture'>
						<img
							className='wow fadeIn'
							data-wow-duration='0.5s'
							data-wow-delay='0.2s'
							src={heroTitleKg}
							width='100%'
							alt='hero-bg'
						/>
					</picture>
				) : (
					''
				)}
				<p
					className=' hero__content__text'
					data-wow-duration='0.6s'
					data-wow-delay='0.3s'>
					{/* {lang === 'uz' ? text[6]?.uz_text : ''} */}
					{lang === 'Рус' ? text[6]?.ru_text : ''}
					{/* {lang === 'en' ? text[6]?.en_text : ''} */}
					{lang === 'kz' ? text[6]?.kg_text : ''}
				</p>
				<div className='hero__buttons '>
					<button className='hero__button hero__button-active'>
						<Link
							to='form'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							{/* {lang === 'uz' ? text[7]?.uz_text : ''} */}
							{lang === 'Рус' ? text[7]?.ru_text : ''}
							{/* {lang === 'en' ? text[7]?.en_text : ''} */}
							{lang === 'kz' ? text[7]?.kg_text : ''}
						</Link>
					</button>
					<button className='hero__button'>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							{/* {lang === 'uz' ? text[8]?.uz_text : ''} */}
							{lang === 'Рус' ? text[8]?.ru_text : ''}
							{/* {lang === 'en' ? text[8]?.en_text : ''} */}
							{lang === 'kz' ? text[8]?.kg_text : ''}
						</Link>
					</button>
				</div>
			</div>

			<div className='hero__bg'>
				<picture className='hero__bg-picture'>
					<img
						data-wow-duration='0.5s'
						data-wow-delay='0.2s'
						src={heroImg}
						width='900'
						height='327'
						alt='hero-bg'
					/>
				</picture>
			</div>
		</section>
	);
};

export default Hero;
