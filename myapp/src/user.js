const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/connection").prototype);


const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "practice1"
};


const addMessage = async (message) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = `Insert into MESSAGE values (?)`;

    await connection.queryAsync(sql, [message, messagebody]);
    await connection.endAsync();
};

const message = {
    messagebody: "Hello everyone! I am abhijit jadhav Student of CDAC MUMBAI"
};

const showMessage = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = `select * from MESSAGE`;

    let list = await connection.queryAsync(sql);
    console.log(list);
    await connection.endAsync();
    return list;

};

showMessage();
