function theBeatlesPlay(arrayMusicians, arrayIns)  {
  var arrayCombine = [];
  for (var index = 0; index < arrayMusicians.length && index < arrayIns.length; index++)  {
    arrayCombine.push(arrayMusicians[index] + ' plays ' + arrayIns[index]);
  }
  return arrayCombine;
}

function johnLennonFacts(arrayJLFacts)  {
  var arrayWithExclamation = [];
  var index = 0;
  while (index < arrayJLFacts.length)  {
    arrayWithExclamation.push(arrayJLFacts[index] + '!!!');
    index++;
  }
  return arrayWithExclamation;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var testFacts = johnLennonFacts(facts);
for (index = 0; index < testFacts.length; index++) {
  console.log(testFacts[index]);
}
