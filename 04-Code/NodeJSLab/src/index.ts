import MySQLTest from "./itembank/test/MySQLTest";
import ClubServer from "./club/ClubServer"

//console.log('hello typescripit');

// var mysqlTest = new MySQLTest();
// mysqlTest.initialize();
// try {
//     mysqlTest.testQuery();
//     console.log('testQuery  ok');
// } finally {
//     mysqlTest.finalize();
// }

ClubServer.Start(3000);