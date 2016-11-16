


angular.module('qouteApp', []);


angular.module('qouteApp').controller('mainController', function($scope, mainService){

    $scope.test = "Angular is working";

    $scope.quotes = mainService.getQuotes();

    $scope.addQuote = function(newQuote) {
        $scope.quotes = mainService.addQuote(newQuote);

        $scope.newQuote = {
            text: "",
            author: ''
        };
    }

    $scope.deleteQuote = function(badQuote) {
        $scope.quotes = mainService.deleteQuote(badQuote.text)
    }



});