// App.js

var oauthApp = angular.module('oauthApp', ['ngCookies', 'ionic', 'oauthApp.controllers','oauthApp.services']);

oauthApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});



// Routes
oauthApp.config(function ($stateProvider, $urlRouterProvider) {
    // setup states
    $stateProvider
            .state('welcome', {
                url: "/welcome",
                templateUrl: "partials/welcome.html",
                controller: 'welcomeCtrl'
            })
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "partials/dashboard.html",
                controller: "dashboardCtrl"
            })

            .state('listProfissionais', {
                url: "/listProfissionais",
                templateUrl: "partials/listProfissionais.html",
                controller: "dashboardCtrl"
            })

            .state('ranking', {
                url: "/ranking",
                templateUrl: "partials/ranking.html",
                controller: "dashboardCtrl"
            })

            .state('mapa', {
                url: "/mapa",
                templateUrl: "partials/mapa.html",
                controller: "dashboardCtrl"
            })

            .state('cadastro', {
                url: "/cadastro",
                templateUrl: "partials/cadastro.html",
                controller: "dashboardCtrl"

            })

            .state('login', {
                url: "/login",
                templateUrl: "partials/login.html",
                controller: "dashboardCtrl"

            });
    // default route
    $urlRouterProvider.otherwise("/welcome");

});
