import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import logo from '../../assets/logo.png';
// import logoSm from '../../assets/header-logo-mb.png';
import './Header.scss';

const Header = ({ load, setLoad, text, lang, setLang }) => {
	const [open, setOpen] = useState(false);
	const [small, setSmall] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () =>
				setSmall(window.pageYOffset > 50)
			);
		}
	}, []);

	function translation(e) {
		localStorage.setItem('lang', e.target.value);
		setLoad(true);
	}
	const handleClick = () => {
		setOpen((e) => !e);
		var menu = document.getElementById('menu__mobile');
		if (open) {
			menu.style.left = '200vw';
		} else {
			menu.style.left = '0%';
		}
	};

	const styles = {
		container: {
			height: '32px',
			width: '32px',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
			padding: '4px',
			zIndex: '100',
		},
		line: {
			height: '2px',
			width: '20px',
			background: 'black',
			transition: 'all 0.2s ease',
		},
		lineTop: {
			transform: open ? 'rotate(45deg)' : 'none',
			transformOrigin: 'top left',
			marginBottom: '5px',
		},
		lineMiddle: {
			opacity: open ? 0 : 1,
			transform: open ? 'translateX(-16px)' : 'none',
		},
		lineBottom: {
			transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none',
			transformOrigin: 'top left',
			marginTop: '5px',
		},
	};

	return (
		<header className={`header ${small ? 'small-nav' : ''}`}>
			<a
				className='logo'
				target='_blank'
				rel='noreferrer'
				href='http://megacom.kg'>
				<picture>
					{/* <source srcSet={logoSm} media='(max-width: 1100px)' /> */}
					<img width='200' src={logo} alt='logo' />
				</picture>
			</a>

			<ul className='nav__links' id='menu__mobile'>
				{lang === 'uz' ? (
					<>
						<Link
							to='gifts'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}>
							<p>{text[0]?.uz_text}</p>
						</Link>
						<Link
							to='winners'
							spy={true}
							smooth={true}
							offset={50}
							duration={1000}>
							<p>{text[1]?.uz_text}</p>
						</Link>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={1500}>
							<p>{text[2]?.uz_text}</p>
						</Link>
						<Link
							to='question'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[3]?.uz_text}</p>
						</Link>
						<Link
							to='footer'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[4]?.uz_text}</p>
						</Link>
					</>
				) : (
					''
				)}
				{lang === 'en' ? (
					<>
						<Link
							to='gifts'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[0]?.en_text}</p>
						</Link>
						<Link
							to='winners'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[1]?.en_text}</p>
						</Link>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[2]?.en_text}</p>
						</Link>
						<Link
							to='question'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[3]?.en_text}</p>
						</Link>
						<Link
							to='footer'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[4]?.en_text}</p>
						</Link>
					</>
				) : (
					''
				)}
				{lang === 'kz' ? (
					<>
						<Link
							to='gifts'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[0]?.kg_text}</p>
						</Link>
						<Link
							to='winners'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[1]?.kg_text}</p>
						</Link>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[2]?.kg_text}</p>
						</Link>
						<Link
							to='question'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[3]?.kg_text}</p>
						</Link>
						<Link
							to='footer'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[4]?.kg_text}</p>
						</Link>
					</>
				) : (
					''
				)}
				{lang === 'Рус' ? (
					<>
						<Link
							to='gifts'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[0]?.ru_text}</p>
						</Link>
						<Link
							to='winners'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[1]?.ru_text}</p>
						</Link>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[2]?.ru_text}</p>
						</Link>
						<Link
							to='question'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[3]?.ru_text}</p>
						</Link>
						<Link
							to='footer'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[4]?.ru_text}</p>
						</Link>
					</>
				) : (
					''
				)}
			</ul>
			<select
				name=''
				value={lang}
				id='lang'
				onChange={(e) => translation(e)}>
				<option value='kz'>Kg</option>
				<option value='Рус'>Рус</option>
				{/* <option value='en'>en</option>
					<option value='uz'>uz</option> */}
			</select>

			<div
				className='mobile__icon'
				style={styles.container}
				onClick={handleClick}>
				<div style={{ ...styles.line, ...styles.lineTop }} />
				<div style={{ ...styles.line, ...styles.lineMiddle }} />
				<div style={{ ...styles.line, ...styles.lineBottom }} />
			</div>
		</header>
	);
};

export default Header;
