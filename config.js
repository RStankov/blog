// Ghost Configuration
// Documentation can be found at http://support.ghost.org/config/

var path = require('path');

module.exports = {
  production: {
    url: 'http://rstankov-blog.herokuapp.com/',
    mail: {},
    fileStorage: false,

    database: {
      client: 'postgres',
      connection: {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        port: '5432'
      },
      debug: false
    },

    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    },

    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  },

  development: {
    url: 'http://localhost:2368',

    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-dev.db')
      },
      debug: false
    },

    server: {
      // Host to be passed to node's `net.Server#listen()`
      host: '127.0.0.1',
      // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
      port: '2368'
    },

    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  }
};
