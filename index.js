const arr = [1, [2, 3, 4], 5, [6, 7, 8], 9];

// destructure the second element
// destrucute the second element of the fourth element in the array
var [, secondElement, , [, fourthSecond]] = arr;
//  [1, [2,3,4],      5, [ 6,  7,      8],        9      ]

// console.log(secondElement);
// console.log(fourthSecond);

var resume = {
  name: "Sanjay",
  age: 30,
  dob: 'YYYY-MM-DD',
  bio: {
    height: 188,
    weight: 90
  },
  skills: ["JS", "Python"],
  projects: [
    { name: 'RC Toy Car', langs: ["Python", "ARM"] },
    { name: 'DIP', langs: ['Python'] }
  ]
};
// Create a variable called name with value Sanjay  in it 
// using destructuring
// Create a variable called height whcih will height value
// Create a varaiable called skills which has a list of skills
// destructure the first project from the resume obj
// destructure the langs used in the second proj
var { name, bio: { height, weight }, skills, projects: [firstProj, { langs }] } = resume;

console.log(name, height, weight, skills, firstProj, langs);


