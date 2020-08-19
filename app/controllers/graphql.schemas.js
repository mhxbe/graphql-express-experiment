import GraphQL from 'graphql';

import { EnrichedLine } from './graphql.models.js';

const {
  buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
} = GraphQL;

export const simpleSchema = buildSchema(`
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

export const advancedSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      EnrichedLines: {
        type: new GraphQLList(new GraphQLNonNull(EnrichedLine)),
        resolve: (root) => {
          const lines = root.lines();
          const enrichedLines = lines.map((line) => ({
            ...line,
            stops: line.stops.map((stopId) => root.stop({ stopId })),
            colors: root.lineColors({ lineId: line.id }),
          }));
          return enrichedLines;
        },
      },
    },
  }),
});
