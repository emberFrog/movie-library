const FormatDate = dateString => {
	const date = new Date(dateString)
	const day = date.getDate()
	const monthIndex = date.getMonth()
	const months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	]
	const year = date.getFullYear()

	return `${day} ${months[monthIndex]} ${year}`
}

export default FormatDate
