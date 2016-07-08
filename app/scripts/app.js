(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home', 
                templateUrl: 'templates/home.html'
            });
        
        $stateProvider
            .state('past', {
                url: '/past',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/past.html'
            });
    }
    
    angular
        .module('blocitoff', ['ui.router', 'firebase', 'ngAnimate'])
        .config(config);
})();