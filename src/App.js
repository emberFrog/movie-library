import React, { useEffect, useState } from 'react'
import './App.scss'
// import ApiRequester from './components/ApiRequester'
import MovieCard from './components/MovieCard/MovieCard'

function App() {
	const API_URL =
		'https://api.themoviedb.org/3/discover/movie?language=ru&api_key=bff0155ab075498110c546bef5bf5e21'

	const [movies, setMovies] = useState([])

	useEffect(() => {
		fetch(API_URL)
			.then(res => res.json())
			.then(data => {
				// console.log(data)
				setMovies(data.results)
			})
	}, [])

	console.log(movies)

	return (
		<main>
			<header>
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
