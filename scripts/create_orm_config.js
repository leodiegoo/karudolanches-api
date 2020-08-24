import Promise from 'bluebird';
import fs from 'fs';
import { URL } from 'url';

import ormconfig from '../ormconfig.example.json';

require('dotenv/config');

fs = Promise.promisifyAll(fs);

(async () => {
  // IF IN HEROKU
  if (process.env.DATABASE_URL) {
    const postgresUrl = new URL(process.env.DATABASE_URL);
    ormconfig = {
      ...ormconfig,
      host: postgresUrl.hostname,
      port: postgresUrl.port,
      username: postgresUrl.username,
      password: postgresUrl.password,
      database: postgresUrl.pathname.replace('/', ''),
    };
    ormconfig.extra = {
      ssl: process.env.DATABASE_USE_SSL === 'true',
    };
    // DOCKER OR LOCAL TESTING
  } else {
    const host = process.env.POSTGRES_PORT_5432_TCP_ADDR || 'localhost';
    ormconfig.host = host;
    ormconfig.extra = {
      ssl: process.env.DATABASE_USE_SSL === 'true',
    };
  }

  await fs.writeFileAsync(
    './ormconfig.json',
    JSON.stringify(ormconfig, null, 2),
  );
})().catch(e => console.error(e.stack));
