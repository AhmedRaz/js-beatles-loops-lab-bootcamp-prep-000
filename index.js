function theBeatlesPlay(arrayMusicians, arrayIns)  {
  var arrayCombine = [];
  for (var index = 0; index < arrayMusicians.length && index < arrayIns.length; index++)  {
    arrayCombine.push(arrayMusicians[index] + ' plays ' + arrayIns[index]);
  }
  return arrayCombine;
}

var testOne = [1,2,3,4];
var testTwo = [a,b,c,d];
var testArray = theBeatlesPlay(testOne, testTwo);
for (index = 0; index < testArray.length; index++) {
  console.log(testArray[index]);
}; //test function
