var mysql = require('mysql');

class MySQLTest {
    
    public Host: string;
    public Port: number;
    public User: string;
    public Password: string;
    public Database: string;
    public Pool: any;

    public initialize(): void {
        this.Host = "localhost";
        this.Port = 3306;
        this.User = "root";
        this.Password = "admin";
        this.Database = "xfor_tcp";
        //
        this.Pool = this.createPool();
    }

    public finalize(): void {

    }

    public testQuery(): void {
        var connection = this.createConnection();
        connection.connect();
        try {
            var sql = "select * from PASSPORT";
            connection.query(sql, function (err: any, result: any) {
                if(err){
                    console.log('[SELECT ERROR] - ',err.message);
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
    }

    private createPool(): any {
        var pool = mysql.createPool({
            host: this.Host,
            user: this.User,
            password: this.Password,
            database: this.Database,
            port: this.Port
        });
        return pool;
    }

    private createConnection(): any {
        var connection = mysql.createConnection({
            host: this.Host,
            user: this.User,
            password: this.Password,
            database: this.Database,
            port: this.Port
        });
        return connection;
    }
}
export default MySQLTest;