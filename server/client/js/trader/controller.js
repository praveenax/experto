var CMT = "";
var total = 0;
myApp.controller('cntrl', function ($scope, $http) {
    $scope.itemList = [
        {
            name: "Home",
            link: "/"
        }
    ];

    $scope.map = [];

    var totalCity = 5;
    var coolDown = 0;
    var coolDownConstant = 50;
    var total_trade_items = {
        food: 100,
        weapons: 20
    };

    for (var i = 1; i <= 20; i++) {
        for (var j = 1; j <= 20; j++) {
            var tmp = {};

            var condition = Util.prototype.getRandomInt(0, 10);

            if (condition == 0) {
                tmp = {
                    name: "x" + i + "y" + j,
                    tile: "sea"
                };
                if (coolDown < coolDownConstant) {
                    coolDown++;
                }
            } else {
                if (totalCity > 0 && coolDown == coolDownConstant && condition > 0) {
                    totalCity--;
                    coolDown = 0;

                    var item = {};

                    //select what resource
                    //                    console.log(total_trade_items.length);
                    var resource_type = Util.prototype.getRandomInt(0, 1);
                    switch (resource_type) {
                    case 0:
                        var val = Util.prototype.getRandomInt(0, total_trade_items.weapons);
                        item = {
                            weapons: val
                        };
                        total_trade_items.weapons = total_trade_items.weapons - val;

                        break;

                    case 1:
                        var val = Util.prototype.getRandomInt(0, total_trade_items.food);
                        item = {
                            food: val
                        };
                        total_trade_items.food = total_trade_items.food - val;

                        break;
                    }

                    tmp = {
                        name: "x" + i + "y" + j,
                        tile: "city",
                        item: item
                    };
                } else {

                    if (coolDown < coolDownConstant) {
                        coolDown++;
                    }
                    tmp = {
                        name: "x" + i + "y" + j,
                        tile: "land"
                    };
                }

            }


            $scope.map.push(tmp);

        }
    }



});

//homeContr
myApp.controller('homeContrl', function ($scope, $http) {

    $scope.onTileClick = function (xy) {
        console.log(xy);
    }


});


myApp.controller('matchContrl', function ($scope, $http) {



});


myApp.service("check", function () {

});