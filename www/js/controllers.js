angular.module('arduino.controllers', [])
    .controller('LedCtrl', function ($scope, Led) {
        $scope.colors = {};
        $scope.isOn = false;

        $scope.$watch('colors', function (colors, oldColors) {
            if (colors.hex === oldColors.hex) return;

            $scope.isOn = true;
            Led.changeColor(colors.hex);
        }, true);

        $scope.toggle = function () {
            Led.toggle($scope.isOn = !$scope.isOn);
        };

        $scope.getBulbClass = function () {
            return $scope.isOn ? 'ion-ios-lightbulb' : 'ion-ios-lightbulb-outline';
        };
    });