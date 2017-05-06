//input - feed it a input text
//output - tags & ranked tags

//npm install classify.js

var Classifier = require('classify.js');
var sw = require('stopword')
const oldString = 'a really Interesting string with some words'.split(' ')
const newString = sw.removeStopwords(oldString)
console.log(newString);
console.log(newString.join(" "));

var inp_txt = "Meetup Chennai Weekend Musicians Meetup Are you a crazy music listener or singer? looking to learn and master a music Instrument? Are you passionate about Sound and Audio Recording? This group is for";


var classifier = new Classifier();

classifier.train("Musician", "Some input that belongs in GROUP-A");
classifier.train("GROUP-A", "Some other input that belongs in GROUP-D");
classifier.train("GROUP-B", "Some input that belongs in GROUP-B");

var group = classifier.classify("Some input that should be GROUP-F");
console.log(group);

//classifier.trainFromFile("GROUP-A", filename);
//classifier.classifyFile(filename);

//var groupList = classifier.rankGroups("Some input that should be GROUP-B");
//console.log(groupList);
  // groupList = [ { group: 'GROUP-B', probability: -0.75 }, { group: 'GROUP-A', probability: -0.45 } ] 

