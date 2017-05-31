function countLetters(string){
  var holdWord = [];
  string = string.split(" ").join("");
  var answerObj = {};
  for(var i = 0; i < string.length; i++){
    if(answerObj[string[i]]===undefined){
      holdWord.push(string[i]);
      answerObj[string[i]]=1;
    } else {
      answerObj[string[i]]+=1;
    }
  }
  return answerObj;
}
console.log(countLetters('lighthouse in the house'));