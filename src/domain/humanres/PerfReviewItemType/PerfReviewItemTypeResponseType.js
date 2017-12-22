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

const PerfReviewItemTypeResponseType = new GraphQLObjectType({
  name: 'PerfReviewItemTypeResponseType',
  description: 'response type for PerfReviewItemType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    perfReviewItemTypeId: {type: GraphQLString}
  })
});

export {PerfReviewItemTypeResponseType};
    