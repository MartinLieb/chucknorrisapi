// const fetch = require('node-fetch');


randomJoke = () => {


  fetch('https://api.chucknorris.io/jokes/random', {
    credentials: 'include', // Useful for including session ID (and, IIRC, authorization headers)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.value) // Prints result from response.json()

    document.getElementById("txtarea").value += data.value + ("\n") + ("\n");

  })
  .catch(error => console.error(error))

}

category = () => {


  fetch('https://api.chucknorris.io/jokes/categories', {
    credentials: 'include', // Useful for including session ID (and, IIRC, authorization headers)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.value) // Prints result from response.json()


    for(let element of data){
      document.getElementById("category").innerHTML += `<option value=${element}>${element}</option>`;
      
    }

  })
  .catch(error => console.error(error))

}

category();


document.getElementById("jokebtn").addEventListener("click", randomJoke);
