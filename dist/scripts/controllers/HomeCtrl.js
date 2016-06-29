(function() {
    function HomeCtrl($scope, $firebaseArray) {
        this.heroTitle = "Welcome to Blocitoff!";
        
        var ref = new Firebase("https://blocitoff-angular-76381.firebaseio.com/");
        $scope.tasks = $firebaseArray(ref);
        
        
        $scope.addTask = function(newTask) {
            $scope.tasks.$add({
                text: newTask
            });
        };
    }
    
    angular
        .module('blocitoff')
        .controller('HomeCtrl',['$scope', '$firebaseArray', HomeCtrl]);
})();