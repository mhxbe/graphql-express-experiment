import express from 'express';
import { stopsRouter } from './routes/stops.js';
import { linesRouter } from './routes/lines.js';

import graphqlController from './controllers/graphql.controller.js';

const app = express();
const { json } = express;

app
  .use(json()) // formerly body-parser
  .use('/graphql', graphqlController)
  .use('/stops', stopsRouter)
  .use('/lines', linesRouter)
  .use('/', (req, res) =>
    res.send(`
      <ul>
        <li><a href="/stops">/stops</a></li>
        <li><a href="/lines">/lines</a></li>
        <li><a href="/graphql">/graphql</a></li>
      </ul>
  `)
  )
  .listen(3413, () => {
    console.log(`App listening on port http://localhost:3413`);
  });
