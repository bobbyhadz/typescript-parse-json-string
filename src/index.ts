export {};

// EXAMPLE 1 - Parse a JSON string in TypeScript

const jsonStr = '{"id": 1, "name": "Bobby Hadz", "salary": 100}';

type Person = {
  id: number;
  name: string;
  salary: number;
};

// 👇️ const result: Person
const result: Person = JSON.parse(jsonStr);

// 👇️ {id: 1, name: 'Bobby Hadz', salary: 100}
console.log(result);

// ---------------------------------------------------

// // EXAMPLE 2 - Using a type assertion to type the result

// const jsonStr = '{"id": 1, "name": "Bobby Hadz", "salary": 100}';

// type Person = {
//   id: number;
//   name: string;
//   salary: number;
// };

// // 👇️ const result: Person
// const result = JSON.parse(jsonStr) as Person; // 👈️ type assertion
// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 3 - Typing an array correctly

// const jsonStr = `
// [
//   {"id": 1, "name": "Bobby Hadz", "salary": 100},
//   {"id": 2, "name": "Alice", "salary": 200}

// ]`;

// type Person = {
//   id: number;
//   name: string;
//   salary: number;
// };

// // 👇️ const result: Person
// const result = JSON.parse(jsonStr) as Person[];

// console.log(result);

// ---------------------------------------------------

// // EXAMPLE 4 - Mark properties that might not exist as optional

// const jsonStr = '{"id": 1, "name": "Bobby Hadz", "salary": 100}';

// type Person = {
//   id: number;
//   name?: string; // 👈️ optional property
//   salary?: number; // 👈️ optional property
// };

// // 👇️ const result: Person
// const result = JSON.parse(jsonStr) as Person;

// // result.name is string or undefined here

// if (typeof result.name === 'string') {
//   // 👇️ result.name is string here
//   console.log(result.name.toUpperCase()); // 👉️ "BOBBY HADZ"
// }

// ---------------------------------------------------

// // EXAMPLE 5 - Use a union if a property might have multiple types

// const jsonStr = '{"id": 1, "name": "Bobby Hadz", "salary": 100}';

// type Person = {
//   id: number;
//   name: string;
//   salary: number | null; // 👈️ number OR null
// };

// // 👇️ const result: Person
// const result = JSON.parse(jsonStr) as Person;

// // 👇️ result.salary is a `number` or `null` here

// if (typeof result.salary === 'number') {
//   // 👇️ result.salary is a number here
//   // 👇️ "100.00"
//   console.log(result.salary.toFixed(2));
// }
