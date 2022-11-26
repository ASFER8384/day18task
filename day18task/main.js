
async function data(){

    var cityNames = document.getElementById('cityNames').value;

    let weatherReport = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=175fa9771bfa1b408feb60f0443a32d7`)

    let res = await weatherReport.json()

    console.log(res);
    let data =await fetch(`https://restcountries.com/v3.1/name/${cityNames}?fullText=true
    `)
    let data2=await data.json()
    for(let i=0;i<data2.length;i++){
        console.log(data2[i].name.common)
    
   

    var weather = document.getElementById('weatherCard');

    weather.innerHTML=`<div class="card c1" style="width: 18rem;">
    <img src="${data2[i].flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data2[i].name.common}</h5>
      <p class="card-text"><strong>Capital :</strong>  ${data2[i].capital}</p>
      <p class="card-text"><strong>Region :</strong>  ${data2[i].region}</p>
      <p class="card-text"><strong>Country :</strong>  ${data2[i].ccn3}</p>
      <p class="card-text"><strong>latlng :</strong>  ${data2[i].latlng}</p>
      <h3>weather</h3>
      <p class="card-text"><strong>Temp :</strong> ${res.main.temp}</p>
      <p class="card-text"><strong>Wind Speed :</strong> ${res.wind.speed}</p>
      <p class="card-text"><strong>Wind Deg :</strong> ${res.wind.deg}</p>
      <p class="card-text"><strong>Pressure :</strong> ${res.main.pressure}</p>
      <p class="card-text"><strong>Humidity :</strong> ${res.main.humidity}</p>
    </div>
  </div>`
}
}
let display=document.getElementById("output")

async function myfun(){
    let data =await fetch(`https://restcountries.com/v3.1/all`)
    let data2=await data.json()
    console.log(data2)
    data2.forEach(element=>{
        show(element)
    })
    }
myfun()

function show(ele){
    let out =document.createElement("div")
    out.classList.add("out")
    out.innerHTML=`<div class="card cfull " style="width: 18rem;">
    <img src="${ele.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${ele.name.common}</h5>
        <p class="card-text"><strong>Capital :</strong>  ${ele.capital}</p>
        <p class="card-text"><strong>Region :</strong>   ${ele.region} </p>
        <p class="card-text"> <strong>Country code :</strong>  ${ele.ccn3} </p>
        <p class="card-text"><strong>latlng :</strong>   ${ele.latlng} </p>
    </div>
</div>`

display.append(out)
}


