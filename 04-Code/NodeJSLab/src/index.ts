import MySQLTest from "./test/MySQLTest";

//console.log('hello typescripit');

var mysqlTest = new MySQLTest();
mysqlTest.initialize();
try {
    mysqlTest.testQuery();
    console.log('testQuery  ok');
} finally {
    mysqlTest.finalize();
}