const settings = document.querySelector('.settings')
const settingsBtn = document.querySelector('.settings-btn')
const imageSection = document.querySelector('.image-section')

const eventName = document.querySelector('#event-name')
const eventDay = document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImg = document.querySelector('#event-image')

const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')

const saveBtn = document.querySelector('.save')
const eventSpan = document.querySelector('.event')
let userTime

const appUpdate = () => {
	eventSpan.textContent = eventName.value
	imageSection.style.backgroundImage = `url('${eventImg.value}')`
	userTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)
	updateTimeCounter()
	setInterval(updateTimeCounter, 1000)
	settings.classList.toggle('active')
}
const updateTimeCounter = () => {
	let miliseconds = userTime - Date.now()
	let seconds = parseInt(miliseconds / 1000)
	miliseconds = miliseconds % 1000
	let minutes = parseInt(seconds / 60)
	seconds = seconds % 60
	let hours = parseInt(minutes / 60)

	minutes = minutes % 60
	let days = parseInt(hours / 24)
	hours = hours % 24

	daysCount.textContent = days.toString()
	hoursCount.textContent = hours.toString()
	minutesCount.textContent = minutes.toString()
	secondsCount.textContent = seconds.toString()
}

settingsBtn.addEventListener('click', () => {
	settings.classList.toggle('active')
})
saveBtn.addEventListener('click', appUpdate)
