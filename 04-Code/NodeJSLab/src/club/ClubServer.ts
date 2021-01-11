const express = require('express');
const server = express();

export default class ClubServer {

    public static Start(port: number): void {
        server.get('/member',(req: any, res: any) => {
            res.send('express member service');
        });
        server.listen(port);
    }
}