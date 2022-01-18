import app from './app';
import config from './config';
// TESTING
import './database/connection';
// END TESTING

app.listen(config.port);

console.log('server on port', config.port);
