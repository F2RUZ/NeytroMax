import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Pagination from '../../components/Pagination';
import './winner.scss';

let PageSize = 10;
const WinnersList = ({ text, lang }) => {
	const [winners, setWinners] = useState([]);
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		axios
			.get('https://backend.megacom.win/translation/get-winners')

			.then((res) => {
				setWinners(res.data?.reverse());
			});
	}, []);

	useEffect(() => {
		if (lang === 'uz') {
			setTitle(text[21]?.uz_text);
			setSubtitle(text[22]?.uz_text);
		}
		if (lang === 'Рус') {
			setTitle(text[21]?.ru_text);
			setSubtitle(text[22]?.ru_text);
		}
		if (lang === 'en') {
			setTitle(text[21]?.en_text);
			setSubtitle(text[22]?.en_text);
		}
		if (lang === 'kz') {
			setTitle(text[21]?.kg_text);
			setSubtitle(text[22]?.kg_text);
		}
	}, [lang, title, winners, subtitle, text]);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return winners.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, winners]);
	return (
		<section className='winner-section section winners mt'>
			<h3 className='section__title'>{title}</h3>
			<p className='section__subtitle'>{subtitle}</p>
			<div className='winner-table'>
				<table className='table table-striped wow fadeIn'>
					<thead>
						<tr>
							<th scope='col'></th>
							<th scope='col'>#</th>
							<th scope='col'>
								{lang === 'uz' ? text[23]?.uz_text : ''}
								{lang === 'Рус' ? text[23]?.ru_text : ''}
								{lang === 'en' ? text[23]?.en_text : ''}
								{lang === 'kz' ? text[23]?.kg_text : ''}
							</th>
							<th scope='col'>
								{lang === 'uz' ? text[24]?.uz_text : ''}
								{lang === 'Рус' ? text[24]?.ru_text : ''}
								{lang === 'en' ? text[24]?.en_text : ''}
								{lang === 'kz' ? text[24]?.kg_text : ''}
							</th>
							<th scope='col'>
								{lang === 'uz' ? text[25]?.uz_text : ''}
								{lang === 'Рус' ? text[25]?.ru_text : ''}
								{lang === 'en' ? text[25]?.en_text : ''}
								{lang === 'kz' ? text[25]?.kg_text : ''}
							</th>
						</tr>
					</thead>
					<tbody>
						{currentTableData.map((winner, index) => (
							<tr key={index}>
								<th scope='row'></th>
								<th scope='row'>{index + 1}</th>
								<td>{winner.date}</td>
								<td>{winner.phone_number}</td>
								<td>{winner.prize}</td>
								{/* <div className='custom-border-bottom'></div> */}
							</tr>
						))}
					</tbody>
				</table>
				<Pagination
					className='pagination-bar'
					currentPage={currentPage}
					totalCount={winners.length}
					pageSize={PageSize}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			</div>
		</section>
	);
};

export default WinnersList;
