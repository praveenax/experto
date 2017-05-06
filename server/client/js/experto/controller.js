var CMT = "";
var total = 0;
myApp.controller('cntrl', function ($scope, $http) {
    $scope.itemList = [
        {
            name: "Home",
            link: "/"
        }
    ];



});


myApp.controller('landingCntrl', function ($scope, $http) {
    



});

myApp.controller('loginCntrl', function ($scope, $http) {
    



});

myApp.controller('dashCntrl', function ($scope, $http) {
    
    
    

//    $http({method: 'GET', url: 'www.google.com/m8/feeds/contacts/default/full', headers: {
//        "GData-Version":"3.0"
////        'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
//    }
//    });
    
//    $http.get('https://www.google.com/m8/feeds/contacts/default/full', {
//    headers: {
//        "GData-Version":"3.0"
//    }
//  }).success(function(response){
//    console.log(response)
//  });
    
    $scope.user_list = [];
    
    $http.get('/prepprax').success(function(resp){
        console.log(resp);
        
        
        $scope.tmp_user_list = resp.feed.entry;
        
        for(var i=0;i<$scope.tmp_user_list.length;i++){
           $scope.tmp_user_list[i]["id"]["_id"] = extrId($scope.tmp_user_list[i]["id"]["$t"]);
            
            
        }
        
        
         $scope.user_list =  $scope.tmp_user_list;
        
        
        
    });
    
    
    $scope.skillArr = ["Manager","Sales","Mumbai","Designer"];
    
    
    $scope.selectUser = function(email){
        
        var selected_user_obj = {};
        
        for(var i =0;i<$scope.user_list.length;i++){
            
            var tmp_obj = $scope.user_list[i];
            if(tmp_obj.gd$email[0].address == email){
             
                selected_user_obj = tmp_obj;
                break;
            }
        }
        
        $scope.selected_user_obj = selected_user_obj;
        
    }
    
    
    function extrId(txt){
//         var txt='http://www.google.com/m8/feeds/contacts/sahayajeswin@gmail.com/base/e25ac8b342789';

      var re1='.*?';	// Non-greedy match on filler
      var re2='(base)';	// Word 1
      var re3='(\\/)';	// Any Single Character 1
      var re4='((?:[a-z][a-z]*[0-9]+[a-z0-9]*))';	// Alphanum 1

      var p = new RegExp(re1+re2+re3+re4,["i"]);
      var m = p.exec(txt);
      if (m != null)
      {
          var word1=m[1];
          var c1=m[2];
          var alphanum1=m[3];
//          document.write("("+word1.replace(/</,"&lt;")+")"+"("+c1.replace(/</,"&lt;")+")"+"("+alphanum1.replace(/</,"&lt;")+")"+"\n");
          
          return alphanum1;
          
      }else{
          return '0';
      }
    }
    
    
    $scope.onSkillInfo = function(skill){
        
    }
    

});

//homeContrl
myApp.controller('homeContrl', function ($scope, $http) {



});


myApp.controller('authControl', function ($scope, $http) {

    //$scope.progressButtonClick = function(){            
            
            var elem = document.getElementById("myBar");
            var width = 0;
            var id = setInterval(frame, 60);
            function frame(){
                if (width >= 100) {
                    clearInterval(id);
                } 
                else {
                        width++;
                        elem.style.width = width + '%';
                } 
            }  
        
   // }

});




function simulateScore(tmp_SC, tmp_BF, tmp_cmmt, tmp_conc) {
    var obj = {};

    var scoreSet1 = [0, 0, 0, 1, 2, 2];
    var scoreSet2 = [0, 0, 1, 1, 2, 4];
    var scoreSet3 = [0, 1, 1, 2, 2, 4];
    var scoreSet4 = [0, 1, 2, 4, 4, 6];


    var hit = Util.prototype.getRandomInt(0, 1);


    var score = 0;

    if (tmp_conc > 10 && tmp_conc < 40) {
        score = scoreSet1[Util.prototype.getRandomInt(0, scoreSet1.length - 1)];
    } else if (tmp_conc > 40 && tmp_conc < 60) {
        score = scoreSet1[Util.prototype.getRandomInt(0, scoreSet2.length - 1)];
    } else if (tmp_conc > 60 && tmp_conc < 80) {
        score = scoreSet1[Util.prototype.getRandomInt(0, scoreSet3.length - 1)];
    } else if (tmp_conc > 80) {
        score = scoreSet1[Util.prototype.getRandomInt(0, scoreSet4.length - 1)];
    }


    if (score == 5) {
        score = 1;
    }

    tmp_SC = tmp_SC + hit * score;
    total = total + hit * score;
    tmp_BF = tmp_BF + 1;

    var isFacing = checkBatsmanFacing(hit, score);

    tmp_cmmt = tmp_cmmt + " " + hit * score + "  ";

    obj.SC = tmp_SC;
    obj.BF = tmp_BF;
    obj.cmmt = tmp_cmmt;
    obj.facing = isFacing;
    if (hit == 0) {
        obj.isDecay_conc = true;
    } else {
        obj.isDecay_conc = false;
    }
    //    obj.totalScore = total;

    return obj;

}

myApp.service("check",function(){
  this.checkBatsmanFacing = function(hit, score){
    var isFacing;
    if (hit * score == 0 || hit * score % 2 == 0) {
        isFacing = true;

    } else {
        isFacing = false;
    }

    return isFacing;
  }
});


function checkBatsmanFacing(hit, score) {
    var isFacing;
    if (hit * score == 0 || hit * score % 2 == 0) {
        isFacing = true;

    } else {
        isFacing = false;
    }

    return isFacing;
}
