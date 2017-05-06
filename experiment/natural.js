var natural = require('natural'),
    tokenizer = new natural.WordTokenizer(),classifier = new natural.BayesClassifier();;
console.log(tokenizer.tokenize("your dog has fleas."));


classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument('buy the q\'s', 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');
 
classifier.train();

console.log(classifier.classify('i am short silver'));