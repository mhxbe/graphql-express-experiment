import GraphQL from 'graphql';
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

const { buildSchema } = GraphQL;
const { graphqlHTTP } = ExpressGraphQL;

const schema = buildSchema(`
  type Query {
    stop(stopId: String!): Stop
    stops: [Stop],
    line(lineId: String!): Line
    lines: [Line],
    linesColors: [LineColors],
    lineColors(lineId: String!): LineColors
  }
  type Mutation {
    createStop(stop: StopInput!): [Stop]
  }
  input StopInput {
    stopId: String!
    name: String!
  }
  type Stop {
    id: String!,
    name: String!,
  }
  type Line {
    id: String!,
    name: String!,
  }
  type LineColors {
    id: String!,
    background: String!,
    border: String!,
    text: String!,
  }
`);

const rootValue = {
  stops: getStops(),
  stop: (graphqlInput) => getStopById(graphqlInput && graphqlInput.stopId),
  createStop: (graphqlInput) => createStop(graphqlInput.stop),
  lines: getLines(),
  line: (graphqlInput) => getLineById(graphqlInput && graphqlInput.lineId),
  linesColors: getLinesColors(),
  lineColors: (graphqlInput) =>
    getLineColorsByLineId(graphqlInput && graphqlInput.lineId),
};

export default graphqlHTTP({
  graphiql: true,
  schema,
  rootValue,
});
