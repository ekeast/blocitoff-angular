 (function() {
     function dateFilter() {
         return function(date) {
             return output;
         };
     }
 
     angular
         .module('blocitoff')
         .filter('dateFilter', dateFilter);
 })();