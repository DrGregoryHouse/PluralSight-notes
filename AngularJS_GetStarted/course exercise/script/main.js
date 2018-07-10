(function () {
    var app = angular.module('githubViewer', []);
    var MainController = function ($scope, $http) {
        var url = "https://api.github.com/users/";
        var username = "angular/";
        var onUserComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };
        var onRepos = function (response) {
            $scope.repos = response.data;
        };
        var onError = function (reason) {
            $scope.error = "Could not fetch data.";
        };
        $scope.search = function (username) {
            $http.get(url + username)
                .then(onUserComplete, onError);
        };
    };
    app.controller("MainController", ["$scope", "$http", MainController])
}());