// Ghost Configuration
// Documentation can be found at http://support.ghost.org/config/

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  const parseUrl = require("parse-database-url");
  const databaseConfig = process.env.CLEARDB_DATABASE_URL ? parseUrl(process.env.CLEARDB_DATABASE_URL) : {};

  module.exports = {
    url: 'http://blog.rstankov.com/',

    mail: {
      transport: 'SMTP',
      host: process.env.MAILGUN_SMTP_SERVER,
      options: {
        service: process.env.MAILGUN_SMTP_SERVER,
        auth: {
          user: process.env.MAILGUN_SMTP_LOGIN,
          pass: process.env.MAILGUN_SMTP_PASSWORD
        }
      }
    },

    fileStorage: false,

    database: {
      client: databaseConfig.driver,
      connection: {
        host: databaseConfig.host,
        user: databaseConfig.user,
        password: databaseConfig.password,
        database: databaseConfig.database,
      },
      debug: false
    },

    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    },

    paths: {
      contentPath: path.join(__dirname, '/content/'),
    }
  };

} else {
  module.exports = {
      url: 'http://localhost:2368',

      database: {
        client: 'sqlite3',
        connection: {
          filename: path.join(__dirname, '/content/data/ghost-dev.db')
        },
        debug: false
      },

      server: {
        host: '127.0.0.1',
        port: '2368'
      },

      paths: {
        contentPath: path.join(__dirname, '/content/'),
      }
  };
}

