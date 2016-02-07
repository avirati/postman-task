var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'postman-task'
    },
    port: 3000,
    db: 'mongodb://localhost/postman-task-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'postman-task'
    },
    port: 3000,
    db: 'mongodb://localhost/postman-task-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'postman-task'
    },
    port: 3000,
    db: 'mongodb://localhost/postman-task-production'
  }
};

module.exports = config[env];
