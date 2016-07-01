(function() {
    function HomeCtrl($scope, $firebaseArray) {
        this.heroTitle = "Welcome to Blocitoff!";

        
        var ref = new Firebase("https://blocitoff-angular-76381.firebaseio.com/tasks");
        $scope.tasks = $firebaseArray(ref);
        $scope.newTask = {
            text: '',
            completed: false,
            dateCreated: Firebase.ServerValue.TIMESTAMP
        };
        
        $scope.addTask = function(newTask) {
            $scope.tasks.$add(newTask);
            $scope.newTask = {};
        };
        
        $scope.completeTask = function(task) {
            task.completed = true;
        };
        
        $scope.now = moment();
        
    }
    

    
    angular
        .module('blocitoff')
        .controller('HomeCtrl',['$scope', '$firebaseArray', HomeCtrl]);
})();