//creating variables
var pwLength;
var checkSpecialChar = document.getElementById("specialChar").checked;
var checkLowCase = document.getElementById("lowCase").checked;
var checkUpCase = document.getElementById("upCase").checked;
var checkNumbers = document.getElementById("numbers").checked;



console.log(checkSpecialChar);
console.log(checkLowCase);
console.log(checkUpCase);
console.log(checkNumbers);

//creating arrays
arrVar = ["checkSpecialChar", "checkLowCase", "checkUpCase", "checkNumbers"];
specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
lowCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
newArr = [];
//generate the password

if (checklowCase = true) {
    newArr = lowCaseArr.concat(newArr);
    console.log(lowCaseArr.concat(newArr));
}

if (checkUpCase = true) {
    newArr2 = upCaseArr.concat(newArr);
    console.log(newArr);
}

if (checkNumbers = true) {
    newArr3 = numberArr.concat(newArr2);
    console.log(numberArr.concat(newArr));
}

console.log(newArr3);

//generates random number
var finalPass = "";
var passDisplay = document.getElementById("pwArea");
passDisplay.innerHTML = finalPass;

var randomIndex = Math.floor(Math.random() * newArr3.length);
var randomLower = newArr[randomIndex];

//for (var i = 0; i < numChars; i++) {
  //  finalPassword = finalPassword + ""
//}

console.log(randomIndex + " = random lower index");
console.log(randomLower + " = random lower");


var randomIndex = Math.floor(Math.random() * newArr3.length);

//for (i=0;i<newArr3.length;i++) {
  //  randomIndex[i]
//}


