(function() {
    function HomeCtrl($scope, $firebaseArray) {
        this.heroTitle = "Welcome to Blocitoff!";
        
        var ref = new Firebase("https://blocitoff-angular-76381.firebaseio.com/tasks");
        $scope.tasks = $firebaseArray(ref);
        $scope.newTask = {
            text: null,
            completed: false,
            dateCreated: Firebase.ServerValue.TIMESTAMP
        };
        
        $scope.addTask = function(newTask) {
            if (newTask.text) {
               $scope.tasks.$add(newTask); 
            }
            else {
                alert("Please enter a task.");
            }
            
            $scope.newTask = {
                text: null,
                completed: false,
                dateCreated: Firebase.ServerValue.TIMESTAMP
            };
        };
        
        $scope.completeTask = function(task) {
            task.completed = true;
            $scope.tasks.$save(task);
        };
        
        $scope.now = moment();
        
    }
    

    
    angular
        .module('blocitoff')
        .controller('HomeCtrl',['$scope', '$firebaseArray', HomeCtrl]);
})();