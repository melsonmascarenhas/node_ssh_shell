const ssh = require('node-ssh-shell')

ssh({

    host: 'test.rebex.net',

    port: 22,

    username: 'demo',

    password: 'password',

    readyTimeout: 5000

})

