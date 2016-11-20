

angular.module('swapiApp').controller('mcontrol', function($scope, mservice) {


    // $scope.getSwapiInfo = mservice.getSwapiInfo().then(function(res){
    //     console.log('controller', res);
    //     $scope.swapiResults = res;
    // })


















   $scope.wholeApi = mservice.swapiPromise()
       .then(function(initalSwapiData){
       console.log('mcontrol', initalSwapiData);
       $scope.swapiResults = initalSwapiData;
   })

    // people, planets, films, species, vehicles, starships,








    // $scope.conTest = "Angular controller is working"
    //
    // $scope.servTest = mservice.test();



})