

angular.module('swapiApp').service('mservice', function($http) {


    // this.getSwapiInfo = function() {
    //     return $http({
    //         method: 'GET',
    //         url: 'http//swapi.co/api/people'
    //     })
    // }.then(function(results){
    //     console.log("serv", results);
    //     return results
    // });


















    this.swapiPromise = function(){

        return $http({
            method: 'GET',
            url: 'http://swapi.co/api/people'
        }).then(function(res){
            console.log(res.data.results);
            return res.data.results;
        })
    }










//     this.test = function(){
//             return 'test'
//         }
// console.log("service is at least connected");


});