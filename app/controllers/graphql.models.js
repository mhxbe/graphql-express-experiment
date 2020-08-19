import GraphQL from 'graphql';

const { GraphQLString, GraphQLObjectType, GraphQLList } = GraphQL;

export const Stop = new GraphQLObjectType({
  name: 'Stop',
  fields: {
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  },
});

export const LineColors = new GraphQLObjectType({
  name: 'LineColors',
  description: 'Colors of a given Line',
  fields: {
    id: {
      type: GraphQLString,
    },
    background: {
      type: GraphQLString,
    },
    border: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
  },
});

export const EnrichedLine = new GraphQLObjectType({
  name: 'EnrichedLine',
  description: 'A Line, enriched with colors',
  fields: {
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    stops: {
      type: new GraphQLList(Stop),
    },
    colors: {
      type: LineColors,
    },
  },
});
