// NOTE(rstankov): This is needed, since Ghost 1.0.0 removed the support of user defined configuration files
//
// Related issues:
//  - https://github.com/TryGhost/Ghost/issues/8754
//  - https://github.com/TryGhost/Ghost/pull/8841

const localConfig = require('./config');
const config = require('ghost/core/server/config');

config.set('database', localConfig.database);
config.set('url', localConfig.url);
config.set('server', localConfig.server);
config.set('paths:contentPath', localConfig.paths.contentPath);
config.set('storage', localConfig.storage);

module.exports = config;
