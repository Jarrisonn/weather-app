const apikey = "085ae5b955369d70708fa52479e057a8";





const displayWeatherDom = async(cityName, cityTemp, icon, weatherDesc) => {
    const cityContainer = document.createElement("div")
    const cityTitleEl = document.createElement("h2")
    const cityTempEl = document.createElement("h3")
    const tempIcon = document.createElement("span")
    const tempToggle = document.createElement("button")
    const descriptionEl = document.createElement("h2")


    descriptionEl.innerText = `${weatherDesc}`
    let celsius = true
    tempToggle.innerText = "F"

    cityContainer.classList.add("city")
    let imgData = await icon.blob()
    .then(imgData => {
        const imageObjectUrl = URL.createObjectURL(imgData)
        console.log(imageObjectUrl);
        image = new Image(100,100)
        image.src = imageObjectUrl
        tempIcon.appendChild(image)
    })

    tempToggle.addEventListener("click", () => {
        //switch to farenheit
        if(celsius){
            let farenheit = cityTemp * 9/5 + 32
            cityTempEl.innerText = `${farenheit} degrees farenheit`
            tempToggle.innerText = `C`
            celsius = !celsius

        }else{
            cityTempEl.innerText = `${cityTemp} degrees celcius`
            tempToggle.innerText = `F`
            celsius = !celsius

        }
    })
    
    
    
    
    cityTitleEl.innerText = `${cityName}`
    cityTempEl.innerText = `${cityTemp} degrees celcius`

    cityContainer.appendChild(cityTitleEl)
    cityContainer.appendChild(cityTempEl)
    cityContainer.appendChild(descriptionEl)
    cityContainer.appendChild(tempIcon)
    cityContainer.appendChild(tempToggle)
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

        locationInput.value = ""


    })

    form.appendChild(formTitleEL)
    form.appendChild(locationLabel)
    form.appendChild(locationInput)
    form.appendChild(submitButton)
    document.body.appendChild(form)
}
weatherSearchDom();

const getWeather = async (city) => {
  const loadingText = document.createElement("h2");
  loadingText.innerText = "Loading";
  document.body.appendChild(loadingText);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apikey}`
  );
  const data = await response.json();
  let icon = data.weather[0].icon;
  let description = data.weather[0].description
  let img;
  switch (icon) {
    case "01d":
      img = await fetch("https://openweathermap.org/img/wn/01d@2x.png");
      break;
    case "02d":
      img = await fetch("https://openweathermap.org/img/wn/02d@2x.png");
      break;
    case "03d":
      img = await fetch("https://openweathermap.org/img/wn/03d@2x.png");
      break;
    case "04d":
      img = await fetch("https://openweathermap.org/img/wn/04d@2x.png");
      break;
    case "09d":
      img = await fetch("https://openweathermap.org/img/wn/09d@2x.png");
      break;
    case "10d":
      img = await fetch("https://openweathermap.org/img/wn/10d@2x.png");
      break;
    case "11d":
      img = await fetch("https://openweathermap.org/img/wn/11d@2x.png");
      break;
    case "13d":
      img = await fetch("https://openweathermap.org/img/wn/13d@2x.png");
      break;
    case "50d":
      img = await fetch("https://openweathermap.org/img/wn/50d@2x.png");
      break;
    case "01n":
      img = await fetch("https://openweathermap.org/img/wn/01n@2x.png");
      break;
    case "02n":
      img = await fetch("https://openweathermap.org/img/wn/02n@2x.png");
      break;
    case "03n":
      img = await fetch("https://openweathermap.org/img/wn/03n@2x.png");
      break;
    case "04n":
      img = await fetch("https://openweathermap.org/img/wn/04n@2x.png");
      break;
    case "09n":
      img = await fetch("https://openweathermap.org/img/wn/09n@2x.png");
      break;
    case "10n":
      img = await fetch("https://openweathermap.org/img/wn/10n@2x.png");
      break;
    case "11n":
      img = await fetch("https://openweathermap.org/img/wn/11n@2x.png");
      break;
    case "13n":
      img = await fetch("https://openweathermap.org/img/wn/13n@2x.png");
      break;
    case "50n":
      img = await fetch("https://openweathermap.org/img/wn/50n@2x.png");
      break;
  }


  console.log(data);
  displayWeatherDom(city, Math.floor(data.main.temp - 273), img,description);
  loadingText.remove();
};