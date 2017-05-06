var spawn = require("child_process").spawn;


var arg1 = "qwe";
var arg2 = 12;
var process = spawn('python',["test.py",arg1, arg2]);
                              
process.stdout.on('data', function (data){
// Do something with the data returned from python script
    
    console.log(data.toString());
});                           