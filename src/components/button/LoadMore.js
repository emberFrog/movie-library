import React from 'react'
import './load-more.scss'

export const LoadMore = ({ onClick }) => {
	return (
		<div className='btn'>
			<button onClick={onClick}>Показать ещё</button>
		</div>
	)
}
