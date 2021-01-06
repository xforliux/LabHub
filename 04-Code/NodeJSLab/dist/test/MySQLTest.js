"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var MySQLTest = /** @class */ (function () {
    function MySQLTest() {
    }
    MySQLTest.prototype.initialize = function () {
        this.Host = "localhost";
        this.Port = 3306;
        this.User = "root";
        this.Password = "admin";
        this.Database = "xfor_tcp";
        //
        this.Pool = this.createPool();
    };
    MySQLTest.prototype.finalize = function () {
    };
    MySQLTest.prototype.testQuery = function () {
        var connection = this.createConnection();
        connection.connect();
        try {
            var sql = "select * from PASSPORT";
            connection.query(sql, function (err, result) {
                if (err) {
                    console.log('[SELECT ERROR] - ', err.message);
                    return;
                }
                console.log('--------------------------SELECT----------------------------');
                console.log(result);
                console.log('------------------------------------------------------------\n\n');
            });
        }
        finally {
            connection.end();
        }
    };
    MySQLTest.prototype.createPool = function () {
        var pool = mysql.createPool({
            host: this.Host,
            user: this.User,
            password: this.Password,
            database: this.Database,
            port: this.Port
        });
        return pool;
    };
    MySQLTest.prototype.createConnection = function () {
        var connection = mysql.createConnection({
            host: this.Host,
            user: this.User,
            password: this.Password,
            database: this.Database,
            port: this.Port
        });
        return connection;
    };
    return MySQLTest;
}());
exports.default = MySQLTest;
