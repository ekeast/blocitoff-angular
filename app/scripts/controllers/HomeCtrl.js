(function() {
    function HomeCtrl($scope, $firebaseArray) {
        this.heroTitle = "Welcome to Blocitoff!";
        
        var ref = new Firebase("https://blocitoff-angular-76381.firebaseio.com/tasks");
        $scope.tasks = $firebaseArray(ref);
        $scope.newTask = {
            text: null,
            completed: false,
            priority: null,
            dateCreated: Firebase.ServerValue.TIMESTAMP
        };
        
        $scope.addTask = function(newTask) {
            if (newTask.text && newTask.priority) {
               $scope.tasks.$add(newTask); 
            }
            else {
                alert("Please enter a task and a priority.");
            }
            
            $scope.newTask = {
                text: null,
                completed: false,
                priority: null,
                dateCreated: Firebase.ServerValue.TIMESTAMP
            };
        };
        
        $scope.removeTask = function(task) {
            $scope.tasks.$remove(task);
        };
        
        $scope.completeTask = function(task) {
            task.completed = true;
            $scope.tasks.$save(task);
        };
        
        $scope.now = moment();
        
        $scope.hovered = false;
        
    }
    

    
    angular
        .module('blocitoff')
        .controller('HomeCtrl',['$scope', '$firebaseArray', HomeCtrl]);
})();