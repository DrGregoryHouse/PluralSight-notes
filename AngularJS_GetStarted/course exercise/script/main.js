(function(){

var app = angular.module('githubViewer', []);

var MainController = function ($scope, $http) {

    var url = "https://api.github.com/";
    var item = "users/";
    var username = "jmelchorp";

    var onUserComplete = function (response) {
        $scope.user = response.data;
    };

    var onError = function (reason) {
        $scope.error = "Could not fetch user.";
    };

    var getGithubUser = function(user) {
        var url = "https://api.github.com/";
        var item = "users/";
        $http.get(url+item+user).then(onUserComplete, onError);
    };

    $scope.search = function(username){
        getGithubUser(username);
    };

    var defaultUser = function(){
        getGithubUser('jmelchorp')
    }
    
    defaultUser();

};
app.controller("MainController", ["$scope", "$http", MainController])

}());