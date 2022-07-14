import { MySQLConnector, MongoDBConnector } 
    from "../dependences.ts";

export const connectorMariaDB = new MySQLConnector({
    database: 'quotes',
    host: 'localhost',
    username: 'devDeno',
    password: '123456',
    port: 3306, 
});

export  const connectorMongoDB = new MongoDBConnector({
    uri: 'mongodb://fernando:12345678@127.0.0.1:27017/?authMechanism=SCRAM-SHA-256&authSource=quotes',
    //uri: 'mongodb://fernando:12345678@localhost:27017',    
    database: 'quotes',
});

