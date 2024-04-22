
// JSON - JavaScript Object Notation

// const user = {
//     'firstName': "Aishwarya", // keys can be written in qoutes "" or ''
//     'age': 40,
//     'gender': "male"
// }
const user = {
    firstName: "Aishwarya",
    age: 40,
    gender: "male"
}

const data = JSON.stringify(user); // it converts your json data into string

const data2 = JSON.parse(data); // it converts your string into json data
console.log(data);