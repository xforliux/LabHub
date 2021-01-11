"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ClubServer_1 = __importDefault(require("./club/ClubServer"));
//console.log('hello typescripit');
// var mysqlTest = new MySQLTest();
// mysqlTest.initialize();
// try {
//     mysqlTest.testQuery();
//     console.log('testQuery  ok');
// } finally {
//     mysqlTest.finalize();
// }
ClubServer_1.default.Start(3000);
