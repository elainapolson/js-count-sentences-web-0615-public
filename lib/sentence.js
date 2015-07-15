'use strict';

var countSentences = function(sentences){
  var sentencesWithStars = sentences.replace("?", "*").replace("!", "*").replace(/\./g, "*");
  var sentence_array = sentencesWithStars.split("*");
  return sentence_array.length - 1
};