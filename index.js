var path  = require('path'),
    ghost = require('ghost');

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
  ghostServer.start();
});
