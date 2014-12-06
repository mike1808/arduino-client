angular.module('arduino.directives', [])
    .directive('colorPicker', function($filter) {
        return {
            restrict: 'E',
            templateUrl: 'templates/colorpicker.html',
            scope: {
                color: '=',
                rgb: '=',
                hex: '='
            },
            link: function (scope, elem, attrs) {
                scope.color = scope.color || {
                    red: 0,
                    green: 0,
                    blue: 0
                };

                scope.$watch('color', function (color) {
                    scope.hex = $filter('toRgb')(color, 'hex');
                    scope.rgb = $filter('toRgb')(color, 'css');
                }, true);
            }
        }
    });