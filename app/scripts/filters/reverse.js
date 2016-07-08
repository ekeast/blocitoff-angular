(function() {
    function reverse() {
        return function(array) {
            return array.slice().reverse();
        };
    }
    
    angular
        .module('blocitoff')
        .filter('reverse', reverse);
})();