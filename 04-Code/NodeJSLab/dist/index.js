"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MySQLTest_1 = __importDefault(require("./test/MySQLTest"));
//console.log('hello typescripit');
var mysqlTest = new MySQLTest_1.default();
mysqlTest.initialize();
try {
    mysqlTest.testQuery();
    console.log('testQuery  ok');
}
finally {
    mysqlTest.finalize();
}
