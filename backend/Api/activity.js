//API distante https://rapidapi.com/malaaddincelik/api/fitness-calculator/

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://fitness-calculator.p.rapidapi.com/activities',
  params: {intensitylevel: '1'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});