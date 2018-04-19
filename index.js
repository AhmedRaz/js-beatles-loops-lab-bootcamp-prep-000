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

function 
