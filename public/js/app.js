
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const weather= document.querySelector('#weather')
const error = document.querySelector('#error')
const loc = document.querySelector('#loc')

//weather.textContent = "Nigga"

weatherform.addEventListener('submit', (e) =>{
e.preventDefault()
const location = search.value
weather.textContent = "Loading"
loc.textContent = ""


fetch('http://localhost:3001/weather?address='+ location ).then((response) =>{
     response.json().then((data) => {
         if(data.error){
             console.log(data.error)
             weather.textContent = ""
             error.textContent = data.error
         }else{

            console.log(data.location)
            console.log(data.forecast)
            loc.textContent = data.location
            weather.textContent = data.forecast
         }
        
     })

})
console.log(location)
})