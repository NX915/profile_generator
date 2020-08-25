const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let txtArr = [];
rl.question('What\'s your name? Nicknames are also acceptable :)    ', (answer) => {
  txtArr.push(answer);
  // console.log(`Your awesome answer was: ${answer}`);
  rl.question('What\'s an activity you like doing?    ', (answer) => {
    txtArr.push(answer);
    // console.log(`Your awesome answer was: ${answer}`);
    rl.question('What do you listen to while doing that?    ', (answer) => {
      txtArr.push(answer);
      // console.log(`Your awesome answer was: ${answer}`);
      // console.log(txtArr);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)    ', (answer) => {
        txtArr.push(answer);
        rl.question('What\'s your favourite thing to eat for that meal?    ', (answer) => {
          txtArr.push(answer);
          rl.question('Which sport is your absolute favourite?    ', (answer) => {
            txtArr.push(answer);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!    ', (answer) => {
              txtArr.push(answer);
              console.log(`${txtArr[0]} loves listening to ${txtArr[2]} while ${txtArr[1]}, devouring ${txtArr[4]} for ${txtArr[3]}, prefers ${txtArr[5]} over any other sport, and is amazing at ${txtArr[6]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});