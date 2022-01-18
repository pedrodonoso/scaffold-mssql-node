import config from '../config';
import sql from 'mssql';

const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  //   port: '1433', // defecto
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        console.log('connected to database.')
        return pool;
    } catch (error ) {
        console.error(error);
    } 
}


export { sql };