// Ionic Starter App

angular.module('arduino', ['ionic', 'arduino.controllers', 'arduino.services', 'arduino.directives', 'arduino.filters', 'btford.socket-io'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('led', {
                url: '/led',
                controller: 'LedCtrl',
                templateUrl: 'templates/led.html'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/led');
    });

