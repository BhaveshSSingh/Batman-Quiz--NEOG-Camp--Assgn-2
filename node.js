var readlineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;
var readName = readlineSync.question(
  chalk.bgBlack("Hey Batfan May I get your Name?")
);
console.log(chalk.bgBlue("Welcome " + readName + " to the BAT QUIZ"));
console.log(
  "Hey " +
    readName +
    " make sure you keep the first letter captial Of Every Word Or You Will Lose Points"
);

function quiz(question, answer) {
  var userAnswer = readlineSync.question(chalk.bgMagenta.white.bold(question));

  if (userAnswer === answer) {
    console.log(chalk.green.bold("You are right"));
    score++;
  } else {
    console.log(
      chalk.red.bold("You are wrong :( " + "the right answer is " + answer)
    );
    score--;
  }
}

var question = [
  {
    question: "What is Batman's favorite color?",
    answer: "Black",
  },
  {
    question: "What is Batman's Father's Name?",
    answer: "Thomas Wayne",
  },
  {
    question: "What is Batman's Mother's  Name?",
    answer: "Martha Wayne",
  },
  {
    question: "What is the full name of  Batman's Butler?",
    answer: "Alfred PennyWorth",
  },
  {
    question: "Who broke  Batman's back?",
    answer: "Bane",
  },
];

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.bgGreen.black.bold("Your final score is " + score));

// lvl2

var welcometoLevel2 = readlineSync.question(
  chalk.bgBlack("Are you ready for level 2?")
);

console.log(
  chalk.bgBlue("Welcome " + readName + " to the level2 of the BAT QUIZ")
);
console.log(
  "Make sure you click enter after Every Question to see the Options"
);

(question = readlineSync.question(
  chalk.bgYellow.black.bold("Who is Batmans favorite superhero?")
)),
  (answer = ["Superman", "GreenLantern", "Wonder-Woman", "Flash"]),
  (index = readlineSync.keyInSelect(answer)),
  console.log(chalk.blueBright("You selected " + answer[index])),
  console.log(chalk.bgGreen.black.bold("Superman is the right answer"));

(question = readlineSync.question(
  chalk.bgYellow.black.bold("What is Batman's favorite dish?")
)),
  (answer = [
    "Les Cristaux de Vent",
    'Confit of Moulard Duck "Foie Gras"',
    "Cheese Burger",
    "mulligatawny soup",
  ]),
  (index = readlineSync.keyInSelect(answer)),
  console.log("You selected " + answer[index]),
  console.log(
    chalk.bgGreen.black.bold("mulligatawny soup is the right answer")
  );

(question = readlineSync.question(
  chalk.bgYellow.black.bold("What is Batman's favorite animal?")
)),
  (answer = ["Panther", "Snake", "Owl", "Bat"]),
  (index = readlineSync.keyInSelect(answer)),
  console.log("You selected " + answer[index]),
  console.log(chalk.bgGreen.black.bold("Owl is the right answer"));

(question = readlineSync.question(
  chalk.bgYellow.black.bold("In which Year was Batman's First Appearance?")
)),
  (answer = ["1959", "1929", "1939", "1954"]),
  (index = readlineSync.keyInSelect(answer)),
  console.log("You selected " + answer[index]),
  console.log(chalk.bgGreen.black.bold("1939 is the right answer"));

(question = readlineSync.question(
  chalk.bgYellow.black.bold(
    "Can Batman ever defeat Superman,Wonder-woman ,flash and aquaman all at the same time?"
  )
)),
  (answer = ["Yes", "No"]),
  (index = readlineSync.keyInSelect(answer)),
  console.log("You selected " + answer[index]),
  console.log(chalk.bgGreen.black.bold("Yes is the right answer"));

var scoreBoard = [
  {
    name: "Bhavesh Singh",
    score: "10",
  },
  {
    name: "Yuvraj Singh",
    score: "7",
  },
];

console.log(chalk.bgBlue("Thanks for Playing the Game" + score));
console.log(scoreBoard);
console.log("If you beat the above score send me a Screenshot");
