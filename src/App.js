import React, { useEffect, useState } from 'react'
import './App.scss'

import MovieCard from './components/movie-card/MovieCard'
import Detail from './components/detail/Detail'

function App() {
	const API_URL =
		'https://api.themoviedb.org/3/discover/movie?language=ru&api_key=bff0155ab075498110c546bef5bf5e21'

	const [movies, setMovies] = useState([])

	useEffect(() => {
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				setMovies(data.results)
			})
	}, [])

	console.log(movies)

	return (
		<main>
			<header>
				<Detail />
				<img></img>
				<h1>Кино справочник</h1>
			</header>
			<section className='allMovies'>
				{movies.map(movie => (
					<MovieCard {...movie} />
				))}
			</section>
			<section className='favorites'></section>
		</main>
	)
}

export default App
