// Get all the Countries data from https://restcountries.com/v3/all

// Types of API Calls / HTTP Methods or CRUD ( Create, Read, Update, Delete ) Operations in Application Development

/*
  GET ---> Read Operation ( can make the call browser itself )
  POST ---> Create Operation
  PUT ---> Update Operation
  DELETE ---> Delete Operation
*/


// XMLHttpRequest
console.log("JS File Executed");

// Step 1
// Create Obj which is capable of making an API Call
const request = new XMLHttpRequest();

// Step 2
// Open connection to destination or config details to Http request obj
request.open('GET', 'https://restcountries.com/v3/all'); // Setting the Operation to be Read Operation

// Step 3
// Send the request to rest countries server
request.send(null);

// Step 3.1
// getting the response and unpacking
request.onload = function () {
  const response = JSON.parse(request.responseText); // parse the string of JSON
  console.log(response);

  // const arr = [{ name: 'Sanjay', marks: 100}, {name: 'Sam', marks: 123}]

  // Output: 
  // Sanjay scored 100
  // Sam scored 123
  // for(var student of arr) {
  //   const { name, marks } = student;
  //   console.log(`${name} scored ${marks}`);
  // }  
  // 

  // for (var country of response) {
  //   const { flag, } = country;
  //   console.log(flag);
  // }

  // for (var i = 0; i < response.length; i++) {
  //   const { flag, } = response[i];
  //   console.log(flag);
  // }

  // response.forEach((element) => { // element will each countries value and succesive iteration
  //   console.log(element.flag, element.name);
  // });

  response.forEach(({ flag, name: { common } }) => { // destructured flag from each country
    console.log(flag, common);
  });

};

