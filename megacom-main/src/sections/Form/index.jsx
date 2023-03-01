import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './form.scss';
import playMarketIcon from '../../assets/play-market.png';
import appStoreIcon from '../../assets/App-Store-Badge.png';

const FormSection = ({ text, lang }) => {
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState(
		lang === 'uz'
			? "Jo'natish"
			: lang === 'Рус'
			? 'Отправить'
			: lang === 'en'
			? 'Submit'
			: 'Жөнөтүү'
	);

	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	let appText = '';

	if (lang === 'uz') {
		appText = text[48]?.uz_text ? text[48]?.uz_text : '';
	} else if (lang === 'Рус') {
		appText = text[48]?.ru_text ? text[48]?.ru_text : '';
	} else if (lang === 'en') {
		appText = text[48]?.en_text ? text[48]?.en_text : '';
	} else {
		appText = text[48]?.kg_text ? text[48]?.kg_text : '';
	}

	let appStoreLink = text[48]?.name ? text[48]?.name : '';
	let playMarketLink = text[47]?.name ? text[47]?.name : '';

	useEffect(() => {
		let time = localStorage.getItem('time');
		let currentTime = new Date().getMinutes();
		if (currentTime - time >= 5) {
			localStorage.removeItem('time');
		}
	}, []);

	const formHandler = () => {
		let time = localStorage.getItem('time');
		let currentTime = new Date().getMinutes();

		if (Number(phone.length) === 12) {
			if (currentTime - time <= 1) {
				localStorage.removeItem('time');

				setIsSuccess(true);
				setIsError(false);
				if (lang === 'uz') {
					setMessage("Ro'yhatdan o'tilgan");
				} else if (lang === 'Рус') {
					setMessage('Зарегистрировано');
				} else if (lang === 'en') {
					setMessage('Registered');
				} else {
					setMessage('Катталган');
				}
				setPhone('');
				localStorage.setItem('time', new Date().getMinutes());
			}
			if (!time) {
				localStorage.setItem('time', currentTime);
				axios
					.post(
						`https://megacom.cdialogues.com/api/v1.0/X_VICTORINA/NOTIFY?MSISDN=${phone}&LOGIN=VALADDSERV&PASSWORD=Qa5BA3jA`
					)
					.then((res) => {
						setIsSuccess(true);
						setIsError(false);
						if (lang === 'uz') {
							setMessage('Muvaffaqqiyatli');
						} else if (lang === 'Рус') {
							setMessage('Успешный');
						} else if (lang === 'en') {
							setMessage('Successful');
						} else {
							setMessage('Ийгиликтүү');
						}
						setPhone('');
						localStorage.setItem('time', new Date().getMinutes());
					})
					.catch((err) => {
						setIsError(true);
						if (lang === 'uz') {
							setMessage('Muvaffaqqiyatsiz');
						} else if (lang === 'Рус') {
							setMessage('Неуспешный');
						} else if (lang === 'en') {
							setMessage('Failed');
						} else {
							setMessage('Ийгиликсиз');
						}
					});
			}
		} else {
			setIsSuccess(false);
			setIsError(true);
			if (lang === 'uz') {
				setMessage('Muvaffaqqiyatsiz');
			} else if (lang === 'Рус') {
				setMessage('Неуспешный');
			} else if (lang === 'en') {
				setMessage('Failed');
			} else {
				setMessage('Ийгиликсиз');
			}
		}
	};
	return (
		<section className='form mt section'>
			<div className='form__message  mtb'>
				<h3 className='wow fadeIn section__title'>
					{lang === 'uz' ? text[45]?.uz_text : ''}
					{lang === 'Рус' ? text[45]?.ru_text : ''}
					{lang === 'en' ? text[45]?.en_text : ''}
					{lang === 'kz' ? text[45]?.kg_text : ''}
				</h3>
				<div className='submits'>
					<input
						type='text'
						placeholder='996ХХХХХХХХХ '
						value={phone}
						onChange={(e) => {
							setPhone(e.target.value);
						}}
					/>
					{isSuccess ? (
						<button
							onClick={formHandler}
							style={{
								color: 'green',
								border: ' 1px solid green',
							}}>
							{message}
						</button>
					) : (
						<button
							onClick={formHandler}
							style={
								isSuccess && !isError
									? {
											color: 'green',
											border: ' 1px solid green',
									  }
									: { color: '#fff' }
							}>
							{message}
						</button>
					)}
				</div>
				<div className='application'>
					<p>{appText}</p>

					<div className='icons'>
						<a href={playMarketLink}>
							<img
								src={playMarketIcon}
								alt='appstore link'
								srcset=''
							/>
						</a>
						<a href={appStoreLink}>
							<img
								src={appStoreIcon}
								alt='appstore link'
								srcset=''
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormSection;
