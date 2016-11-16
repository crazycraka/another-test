console.log("control.js is connected");


angular.module('practiceApp', []);

angular.module('practiceApp').controller('firstCtrl', function($scope){
    $scope.test = "this is a test";
    $scope.dogs = [
        {name: 'happy', breed: 'Jack Terrier', size: 'small', age: '5', gender: 'male'},
        {name: 'spark', breed: 'australian cattle dog', size: 'medium', age: '10', gender: 'female'},
        {name: 'chuy', breed: 'pomeranian chuahua', size: 'small', age: '15', gender: 'male'},
        {name: 'click', breed: 'belgian shepherd', size: 'large', age: '2', gender: 'female'},
        {name: 'rex', breed: 'german shepherd', size: 'large', age: '1', gender: 'male'},
        {name: 'tealc', breed: 'australian shepherd', size: 'medium', age: '4', gender: 'male'},
        {name: 'carter', breed: 'australian shepherd', size: 'medium', age: '4', gender: 'female'},
        {name: 'bullet', breed: 'novia scotian duck toller', size: 'medium', age: '7', gender: 'male'}
    ];

});