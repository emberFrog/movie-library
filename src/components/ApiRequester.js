import React, { useEffect } from 'react'

function ApiRequester() {
	const getMovie = () => {
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=bff0155ab075498110c546bef5bf5e21'
		)
			.then(res => res.json())
			.then(json => console.log(json))
	}

	useEffect(() => {
		getMovie()
	}, [])

	return <div>ApiRequester</div>
}

export default ApiRequester
