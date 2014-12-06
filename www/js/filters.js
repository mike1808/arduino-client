angular.module('arduino.filters', [])
    .filter('toRgb', function() {
        function toCss(colors) {
            return 'rgb(' + colors.red + ',' + colors.green + ',' + colors.blue +')';
        }

        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? '0' + hex : hex;
        }
        
        function toHex(colors) {
            return '#' + componentToHex(parseInt(colors.red)) + componentToHex(parseInt(colors.green)) + componentToHex(parseInt(colors.blue));
        }

        return function(colors, type) {
            switch (type) {
                case 'css':
                    return toCss(colors);
                case 'hex':
                    return toHex(colors);
            }
        }
    });