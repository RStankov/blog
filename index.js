require('./configOverwrite');

const ghost = require('ghost');

ghost().then((server) => server.start());
