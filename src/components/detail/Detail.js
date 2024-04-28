import React from 'react'
import formatDate from '../../formatDate'

import './detail.scss'

const Detail = ({ movie, onClose }) => {
	const API_IMG = 'https://image.tmdb.org/t/p/original/'

	const handleClickOutside = e => {
		if (e.target.classList.contains('overlay')) {
			onClose()
		}
	}

	return (
		<article className='overlay' onClick={handleClickOutside}>
			<article className='drawer'>
				<img src={API_IMG + movie.poster_path} alt='Original Poster'></img>
				<section className='detailInfo'>
					<h2>{movie.title}</h2>
					<p>
						<b>Рейтинг: </b>
						{movie.vote_average.toFixed(1)}
					</p>
					<p>
						<b>Дата выхода: </b>
						{formatDate(movie.release_date)}
					</p>
					<p>
						<b>Описание: </b>
						{movie.overview}
					</p>
				</section>
			</article>
		</article>
	)
}

export default Detail
