import sql from 'mssql';

const dbSettings = {
  user: 'admin',
  password: 'adminadmin',
  server: 'localhost',
  instanceName: 'LAPTOP-FKIMJSP3', // no es necesaria
  database: 'customdatabase',
  //   port: '1433', // defecto
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        // TESTING
        const result = await pool.request().query('SELECT 1');
        console.log("QUERY TESTING", result);
        // END TESTING
        return pool;
    } catch (error ) {
        console.error(error);
    } 
}

getConnection();
