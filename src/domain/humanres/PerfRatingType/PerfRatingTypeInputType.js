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

const PerfRatingTypeInputType = new GraphQLInputObjectType({
  name: 'PerfRatingTypeInputType',
  description: 'input type for PerfRatingType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    perfRatingTypeId: {type: GraphQLString}
  })
});

export {PerfRatingTypeInputType};
    