(function() {
    function prioritize() {
        return function(array) {
            return array.slice().sort(function(a, b) {
                var x = a.priority; var y = b.priority; var w = a.dateCreated; var z = b.dateCreated;
                if (x > y) {
                    return -1;
                }
                else if (x < y) {
                    return 1;
                }
                else {
                    if (z > w) {
                        return 1;
                    }
                    else if (w > z) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
                
//                return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                
            });
        };
    }
    
    angular
        .module('blocitoff')
        .filter('prioritize', prioritize);
})();