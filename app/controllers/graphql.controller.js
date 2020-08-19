import ExpressGraphQL from 'express-graphql';

import {
  getStops,
  getStopById,
  createStop,
} from '../services/stops.service.js';
import { getLines, getLineById } from '../services/lines.service.js';
import {
  getLinesColors,
  getLineColorsByLineId,
} from '../services/colors.service.js';

import { simpleSchema /* advancedSchema */ } from './graphql.schemas.js';

const { graphqlHTTP } = ExpressGraphQL;

const rootValue = {
  stops: () => getStops(),
  stop: (graphqlInput) => getStopById(graphqlInput && graphqlInput.stopId),
  createStop: (graphqlInput) => createStop(graphqlInput.stop),
  lines: () => getLines(),
  line: (graphqlInput) => getLineById(graphqlInput && graphqlInput.lineId),
  linesColors: () => getLinesColors(),
  lineColors: (graphqlInput) =>
    getLineColorsByLineId(graphqlInput && graphqlInput.lineId),
};

export default graphqlHTTP({
  graphiql: true,
  schema: simpleSchema,
  // schema: advancedSchema,
  rootValue,
});
