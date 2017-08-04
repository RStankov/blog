const ghostVersion = require('ghost/core/server/utils/ghost-version');
const config = require('./configOverwrite');
const path = require('path');

module.exports = {
  currentVersion: ghostVersion.safe,
  database: config.get('database'),
  migrationPath: path.join(__dirname, 'node_modules/ghost/core/server/data/migrations')
};
