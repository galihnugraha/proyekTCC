const mysql = require('mysql')

const db = mysql.createPool({
    host: '192.168.17.132',
    user: 'root',
    password: 'proyektcc123*',
    database: 'projecttcc',
    port: '/var/run/mysqld/mysqld.sock'
})

exports.db = db;