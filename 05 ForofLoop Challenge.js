// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sidney" }
]
for (const studentInfo of students) {
  console.log(`${studentInfo.name} lives in ${studentInfo.city}`)
}
