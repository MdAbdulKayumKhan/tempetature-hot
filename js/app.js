document.getElementById('btn-search').addEventListener('click', (e) => {
    e.preventDefault();
    // all clear fields will assign
  
    document.getElementById("error").innerHTML = "";

    const cityInput = document.getElementById('city-input').value;
   

    if(cityInput.length > 0){
        getCity(cityInput);
    } else{
        document.getElementById('error').innerText = 'Please write something on search bar';
    }

})

const fetched = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const getWeatherImage = img =>{
    // console.log(img)
    if(img == 'mist' || img == 'smoke' || img == 'haze' || img == 'dust' || img == 'fog' || img == 'sand' || img == 'ash' || img == 'squall' || img == 'tornado' ){
        return '50d';
    } else if(img == 'snow'){
        return '13d';
    }
     else if(img == 'thunderstorm'){
        return '11d';
    }
     else if(img == 'rain'){
        return '10d';
    }
     else if(img == 'drizzle'){
        return '09d';
    }
     else if(img == 'clouds'){
        return '02d';
    }
     else if(img == 'clear'){
        return '01d';
    }
     
}

const getCity = city => {
    document.getElementById('city-input').textContent ='';
    const key = 'a74a09f73c17c4be1eacb5ad9c899867';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    fetched(url)
    .then(data =>{
        
        // console.log(data)
        document.getElementById('city-name').innerText = `${data.name}`;
        document.getElementById('temp').innerText = `${(data.main.temp - 273.1).toFixed(2)}`;
        document.getElementById('lead').innerText = `${data.weather[0].main}`;
        const weatherImg = data.weather[0].main;
        const imgNo = getWeatherImage(weatherImg.toLowerCase());
        document.getElementById("img-src").src = `https://openweathermap.org/img/wn/${imgNo}@2x.png`;
        

    })

}
