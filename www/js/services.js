angular.module('arduino.services', [])
    .factory('Socket', function (socketFactory) {
        return socketFactory({ioSocket: io.connect('http://46.162.209.149:3000')});
    })
    .factory('Led', function (Socket) {
        return {
            changeColor: function (color) {
                Socket.emit('change-color', color);
            },
            toggle: function (state) {
                Socket.emit('toggle', state);
            }
        };
    });