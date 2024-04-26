import React from 'react'

function MovieList(props) {
	// const [movieList, setMovies]
	return (
		<>
			{props.movies.map((movie, index) => (
				<div>
					<img src={movie.poster_path} alt='Movie'></img>
				</div>
			))}
		</>
	)
}

export default MovieList
