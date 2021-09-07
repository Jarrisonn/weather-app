const apikey = "085ae5b955369d70708fa52479e057a8";





const displayWeatherDom = (cityName, cityTemp) => {
    const cityContainer = document.createElement("div")
    const cityTitleEl = document.createElement("h2")
    const cityTempEl = document.createElement("h3")


    cityTitleEl.innerText = `${cityName}`
    cityTempEl.innerText = `${cityTemp} degrees celcius`

    cityContainer.appendChild(cityTitleEl)
    cityContainer.appendChild(cityTempEl)
    document.body.appendChild(cityContainer)

}

const weatherSearchDom = () => {
    const form = document.createElement("form")

    const formTitleEL = document.createElement("h1")
    formTitleEL.innerText = "Weather-App"
    const locationInput = document.createElement("input")
    const locationLabel = document.createElement("label")
    locationLabel.htmlFor = "location"
    locationLabel.innerText = "Enter a city name to get the weather"
    locationInput.name = "location"

    const submitButton = document.createElement("button")
    submitButton.classList.add("button")
    submitButton.innerText = "Submit"

    submitButton.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(locationInput.value);
        getWeather(locationInput.value)



    })

    form.appendChild(formTitleEL)
    form.appendChild(locationLabel)
    form.appendChild(locationInput)
    form.appendChild(submitButton)
    document.body.appendChild(form)
}
weatherSearchDom();

const getWeather = async(city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apikey}`)
    const data = await response.json()
    console.log(data);
    displayWeatherDom(city,Math.floor(data.main.temp - 273))
}