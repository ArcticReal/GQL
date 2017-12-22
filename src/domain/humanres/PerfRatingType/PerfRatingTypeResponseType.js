import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const PerfRatingTypeResponseType = new GraphQLObjectType({
  name: 'PerfRatingTypeResponseType',
  description: 'response type for PerfRatingType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    perfRatingTypeId: {type: GraphQLString}
  })
});

export {PerfRatingTypeResponseType};
    