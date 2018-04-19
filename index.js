function theBeatlesPlay(arrayMusicians, arrayIns)  {
  var arrayCombine = [];
  for (var index = 0; index < arrayMusicians.length && index < arrayIns.length; index++)  {
    arrayCombine.push(arrayMusicians[index] + ' plays ' + arrayIns[index]);
  }
  return arrayCombine;
}
