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

const PerfReviewItemTypeInputType = new GraphQLInputObjectType({
  name: 'PerfReviewItemTypeInputType',
  description: 'input type for PerfReviewItemType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    perfReviewItemTypeId: {type: GraphQLString}
  })
});

export {PerfReviewItemTypeInputType};
    