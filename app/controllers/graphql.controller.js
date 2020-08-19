import GraphQL from 'graphql';
import ExpressGraphQL from 'express-graphql';

import { getStops, getStopById } from '../services/stops.service.js';
import { getLines, getLineById } from '../services/lines.service.js';

const { buildSchema } = GraphQL;
const { graphqlHTTP } = ExpressGraphQL;

const schema = buildSchema(`
  type Query {
    stop(stopId: String!): Stop
    stops: [Stop],
    line(lineId: String!): Line
    lines: [Line],
  }
  type Stop {
    id: String!,
    name: String!,
  }
  type Line {
    id: String!,
    name: String!,
  }
`);

const rootValue = {
  stops: getStops(),
  stop: (graphqlInput) => getStopById(graphqlInput && graphqlInput.stopId),
  lines: getLines(),
  line: (graphqlInput) => getLineById(graphqlInput && graphqlInput.lineId),
};

export default graphqlHTTP({
  graphiql: true,
  schema,
  rootValue,
});
