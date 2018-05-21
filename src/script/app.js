var app = angular.module("githubViewer",[]);
var getUserController = function($scope,$http){
    var url = "http://api.github.com/users/";
    var onUserComplete = function(response){
        $scope.user = response.data;
        $http.get($scope.user.repos_url)
             .then(onRepos,onError) 
    };
    var onRepos = function(response){
        $scope.repos = response.data;
    };
    var onError = function(){
        $scope.error = "Could not fetch the user"
    };
    $scope.username="angular";
    $scope.search = function(username){
        $http.get(url+$scope.username)
             .then(onUserComplete, onError)
    };
    $scope.sortReposBy = "-languaje";  
    
};
app.controller("getUserController", ["$scope", "$http", getUserController]);