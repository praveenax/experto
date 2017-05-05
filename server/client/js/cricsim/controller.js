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

//homeContrl
myApp.controller('homeContrl', function ($scope, $http) {



});


myApp.controller('matchContrl', function ($scope, $http) {

    $scope.totalScore = "0";
    $scope.team1 = "India";
    $scope.team2 = "Pakistan";
    $scope.batList = batData;
    $scope.bowlList = bowlData;
    $scope.selectBowl = $scope.bowlList[0].name;
    $scope.selectBat = $scope.batList[0].name;

    //    $("#bowlTab_content").hide();

    $scope.onSimulate = function (ballCount) {


        changeBowler();


        for (var x = 0; x < ballCount; x++) {

            if ($scope.selectBowl != undefined && $scope.selectBat != undefined) {
                var cmmt = $scope.selectBowl + " is bowling to " + $scope.selectBat + "";


                for (var i = 0; i < $scope.batList.length; i++) {

                    if ($scope.selectBat == $scope.batList[i].name) {
                        var SC = parseInt($scope.batList[i].score);
                        var BF = parseInt($scope.batList[i].ballFaced)
                        var res_Obj = simulateScore(SC, BF, cmmt, $scope.batList[i].conc);
                        var currStr = ((res_Obj.SC / res_Obj.BF) * 100).toFixed(2);

                        $scope.batList[i].score = "" + res_Obj.SC;
                        $scope.batList[i].ballFaced = "" + res_Obj.BF;
                        $scope.batList[i].currStr = "" + currStr;
                        //isDecay_conc

                        //                        calcConcentration(res_Obj.isDecay_conc);
                        if (res_Obj.isDecay_conc == true) {
                            $scope.batList[i].conc = $scope.batList[i].conc - $scope.batList[i].conc_decay
                        } else {
                            $scope.batList[i].conc = $scope.batList[i].conc + $scope.batList[i].conc_incre
                        }

                        //                        $scope.batList[i].conc = "" + currStr;
                        //                        conc_decay

                        $scope.totalScore = "" + total;
                        //                        $scope.batList[i].isFacing = res_Obj.facing;

                        change_Batsman_onOver(res_Obj, i);

                        break;
                    }
                }



                $scope.comment = CMT + "\n" +
                    res_Obj.cmmt;

                CMT = CMT + "\n" +
                    res_Obj.cmmt;

                // score logic

                // score = random(0,1) <-- hit or not  <-- how gud bowler
                // score (hit) -- random(0,6) <-- 0,1,2,3,4,5(4) or 6
            } else {
                alert("Select Options");
            }





        }



    }

    function changeBowler() {
        if ($scope.bowlList[0].isBowling == true) {
            $scope.selectBowl = $scope.bowlList[0].name;
            $scope.bowlList[1].isBowling = true;
            $scope.bowlList[0].isBowling = false;

        } else if ($scope.bowlList[1].isBowling == true) {
            $scope.selectBowl = $scope.bowlList[1].name;
            $scope.bowlList[1].isBowling = false;
            $scope.bowlList[0].isBowling = true;
        }
    }

    function change_Batsman_onOver(res_Obj, i) {
        if (!res_Obj.facing && i == 0) {
            $scope.batList[1].isFacing = true;
            $scope.batList[0].isFacing = false;
            $scope.selectBat = $scope.batList[1].name;
        } else if (!res_Obj.facing && i == 1) {
            $scope.batList[0].isFacing = true;
            $scope.batList[1].isFacing = false;
            $scope.selectBat = $scope.batList[0].name;
        }

    }

    $scope.onBowlingTab = function () {
        console.log("bowl");
        $("#batTab").addClass("tabHeader-clicked");
        $("#bowlTab").removeClass("tabHeader-clicked");
        $("#bowlTab_content").show();
        $("#batTab_content").hide();
    }

    $scope.onBattingTab = function () {
        console.log("bat");
        $("#batTab").removeClass("tabHeader-clicked");
        $("#bowlTab").addClass("tabHeader-clicked");

        $("#bowlTab_content").hide();
        $("#batTab_content").show();
    }



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
