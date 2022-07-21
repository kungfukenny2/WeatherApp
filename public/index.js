function someFunc(){
    let city = document.getElementById("theCity").value

    window.location = `http://localhost:3000/weatherapp/${city}`
 }

//how to start run it: type nodemon index.js in terminal & localhost:3000/weatherapp/city in browser  
