function mommify(inputStr) {
  var result = "";
  var charList = inputStr.split("");
  var numOfVowel = getNumOfVowel(charList);
  charList.forEach(function(character) {
    if("aeiouAEIOU".indexOf(character) >= 0 && numOfVowel/inputStr.length > 0.3) {
      result += "mommy";
    } else {
      result += character;
    }
  });
  return result;
}

function getNumOfVowel(charList) {
  var numOfVowel = 0;
  charList.forEach(function(character){
    if("aeiouAEIOU".indexOf(character) >= 0) {
      numOfVowel++;
    }
  });
  return numOfVowel;
}
