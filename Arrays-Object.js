// TASK 1: Create an object named book with the following properties:

const book = {
  title: "Avatar",
  author: "Junyl",
  pages: 20,
  isRead: false,
};
console.log(book);
book.isRead = true;
console.log(book);

//Task 2: Create an array named movies containing three objects.

let movies = [
  { title: "Avatar", director: "Junyl", year: 2000 },
  { title: "Skate Life", director: "Tony Hawk", year: 2003 },
  { title: "Adventure Time", director: "Cabs", year: 2004 },
];
console.log(movies[0]);

//added new movie
let addMovie = movies.push({ title: "Gunna", director: "Emma", year: 2005 });

console.log(movies[3]);

//updated year of the first movie:
movies[0].year = 2023;

console.log(movies[0]);
console.log(movies);

//TASK 3 :Create an object named student with the following properties:

let student = {
  name: "Junyl",
  age: 24,
  subjects: ["English", "Filipino", "Mathematics"],
};
console.log(student.subjects[0]);

student.subjects.push("History");
console.log(student.subjects);

//TASL 4: Create an object named recipe with the following properties:

let recipe = {
  name: "Adobo",
  ingredients: [
    { name: "Patis", quantity: 2, isVegetarian: false },
    { name: "Mantika", quantity: 2, isVegetarian: false },
  ],
};

console.log(recipe);
if (recipe.ingredients[0].isVegetarian === true) {
  console.log("true");
} else {
  console.log("false");
}

//added a new ingredients to the ingredients array
recipe.ingredients.push({
  name: "Suka",
  quantity: 3,
  isVegetarian: false,
});
console.log(recipe.ingredients[2]);
console.log(recipe);
