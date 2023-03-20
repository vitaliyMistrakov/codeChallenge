/**
 *
 * Given is the following FizzBuzz application which counts from 1 to 100 and outputs either the
 * corresponding number or the corresponding text if one of the following rules apply.
 * 
 * Rules:
 *  - dividable by 3 without a remainder -> Fizz
 *  - dividable by 5 without a remainder -> Buzz
 *  - dividable by 3 and 5 without a remainder -> FizzBuzz
 *
 * ACCEPTANCE CRITERIA:
 * 
 * Please refactor this code so that it can be easily extended with other rules, such as
 * - "if it is dividable by 7 without a remainder output Bar"
 * - "if multiplied by 10 is larger than 100 output Foo"
 */


const rules = [
  { condition: (n) => n % 3 === 0, text: "Fizz" },
  { condition: (n) => n % 5 === 0, text: "Buzz" },
  { condition: (n) => n % 7 === 0, text: "Bar" },
  { condition: (n) => n * 10 > 100, text: "Foo" },
];
function fizzbuzz(limit = 100, rules) {


  for (let i = 1; i <= limit; i++) {
    let output = "";

    for (const rule of rules) {
      if (rule.condition(i)) {
        output += rule.text;
      }
    }

    if (output === "") {
      output = `${i}`;
    }
    console.log(`${i}: ${output}`);
  }
}

fizzbuzz(222,rules);git
