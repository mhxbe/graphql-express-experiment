import express from 'express';
import { stopsRouter } from './routes/stops.js';
import { linesRouter } from './routes/lines.js';
import { colorsRouter } from './routes/colors.js';

import graphqlController from './controllers/graphql.controller.js';

const app = express();
const { json } = express;

app
  .use(json()) // formerly body-parser
  .use('/api/graphql', graphqlController)
  .use('/api/stops', stopsRouter)
  .use('/api/lines', linesRouter)
  .use('/api/colors', colorsRouter)
  .use('/', (req, res) =>
    res.send(`
      <ul>
        <li><a href="/api/stops">stops</a></li>
        <li><a href="/api/lines">lines</a></li>
        <li><a href="/api/colors">colors</a></li>
        <li><a href="/api/graphql">graphql</a></li>
      </ul>
  `)
  )
  .listen(3413, () => {
    console.log(`App listening on port http://localhost:3413`);
  });
