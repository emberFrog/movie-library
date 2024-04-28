import React, { useEffect, useState } from 'react'
import './App.scss'

import MovieCard from './components/movie-card/MovieCard'
import Detail from './components/detail/Detail'
import { LoadMore } from './components/button/LoadMore'

function App() {
	const API_URL =
		'https://api.themoviedb.org/3/discover/movie?language=ru&api_key=bff0155ab075498110c546bef5bf5e21'

	const [movies, setMovies] = useState([])
	const [selectedMovie, setSelectedMovie] = useState(null)
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(null)

	useEffect(() => {
		fetch(API_URL + `&page=${page}`)
			.then(res => res.json())
			.then(data => {
				if (page === 1) {
					setMovies(data.results)
				} else {
					setMovies(prevMovies => [...prevMovies, ...data.results])
				}
				setTotalPages(data.total_pages)
			})
			.catch(error => console.error('Error fetching data:', error))
	}, [page, API_URL])

	const handleMovieClick = movie => {
		setSelectedMovie(movie)
	}

	const handleCloseDetail = () => {
		setSelectedMovie(null)
	}

	const handleLoadMore = () => {
		if (page < totalPages) {
			setPage(prevPage => prevPage + 1)
		}
	}

	console.log(movies) //delete later

	return (
		<main>
			<header>
				<h1>Кино справочник</h1>
			</header>
			<section className='allMovies'>
				{movies.map(movie => (
					<MovieCard
						key={movie.id}
						movie={movie}
						onClick={() => handleMovieClick(movie)}
					/>
				))}
			</section>
			{totalPages && page < totalPages && <LoadMore onClick={handleLoadMore} />}
			{selectedMovie && (
				<Detail movie={selectedMovie} onClose={handleCloseDetail} />
			)}
		</main>
	)
}

export default App
