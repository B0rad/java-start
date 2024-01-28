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

function calculateAdultYears() {
//   there is a better option listed below than using-->adultYears = age - 18;
    return age - 18
}

totalAdultYears = calculateAdultYears();
alert(totalAdultYears);

age = 56;
calculateAdultYears();
alert(totalAdultYears);
