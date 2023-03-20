/**

Print a pyramid!

    *
   ***
  *****
 *******
*********

ACCEPTANCE CRITERIA:

Write a script to output pyramid of given size to the console (with leading spaces).

*/

function pyramid(size) {
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size - i - 1; j++) {
      row += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

pyramid(5);
