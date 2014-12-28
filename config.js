// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://support.ghost.org/config/
var path = require('path');

module.exports = {
  // ### Production
  // When running Ghost in the wild, use the production environment
  // Configure your URL and mail settings here
  production: {
    url: 'http://my-ghost-blog.com',
    mail: {},
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost.db')
      },
      debug: false
    },

    server: {
      // Host to be passed to node's `net.Server#listen()`
      host: '127.0.0.1',
      // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
      port: '2368'
    }
  },

  // ### Development **(default)**
  development: {
    // The url to use when providing links to the site, E.g. in RSS and email.
    // Change this to your Ghost blogs published URL.
    url: 'http://localhost:2368',

    // Example mail config
    // Visit http://support.ghost.org/mail for instructions
    // ```
    //  mail: {
    //      transport: 'SMTP',
    //      options: {
    //          service: 'Mailgun',
    //          auth: {
    //              user: '', // mailgun username
    //              pass: ''  // mailgun password
    //          }
    //      }
    //  },
    // ```
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
