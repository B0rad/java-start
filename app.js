// let greetingText;
// let age;
// age = 32;
// greetingText = "Hi, I'm Big Chungus";
// alert(greetingText);
// alert(greetingText);
// greetingText = "Arr I be the chungus";
// alert(greetingText);
// alert(age);
// age = 41;
// alert(age);
// this is only so I can study code later

let age = 41;
let userName = "Big Chungus";
let hobbies = ["Sportsball", "Cooking", "Book looking"];
let job = {
  title: "Couch Surfer",
  place: "Pineapple Under the Sea",
  salary: 120000,
};

// alert(hobbies[0]);
// alert(job.title);
// also leaving in to study later
let totalAdultYears;

function calculateAdultYears(userAge) {
  //   there is a better option listed below than using-->adultYears = age - 18;
  let result;
  result = userAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears)

age = 56;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name: "Big Chungus", //Property
  greet() {
    //Method
    console.log("Sup");
  },
};

person.greet()
