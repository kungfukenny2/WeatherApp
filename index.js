const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

//setting path for views folder
app.set('views', './Views')
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/static', express.static('public'));


let baseurl = `http://api.weatherapi.com/v1/current.json?key=3dc547effcc24cabaf1182127222605`

app.get("/weatherapp", (req, res) => {
    res.render('index')
})

//need to go to the url
app.get("/weatherapp/:city", async (req, res) => {
   let url = baseurl + `&q=${req.params.city}` 
    console.log(url)

    const data = await fetch(url).then(response => response.json())
    console.log(data.location.name, data.location.region)
    let location = `${data.location.name}, ${data.location.region}`
    res.render('index', { data: {temp: data.current.temp_f, location: location}})
});

app.post('/',(req, res) => {
    console.log(req.body)
    res.send("/currentWeather")
})

app.listen(3000)

