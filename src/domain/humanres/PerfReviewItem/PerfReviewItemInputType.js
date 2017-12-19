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

const PerfReviewItemInputType = new GraphQLInputObjectType({
  name: 'PerfReviewItemInputType',
  description: 'input type for PerfReviewItem',

  fields: () => ({
    comments: {type: GraphQLString},
    employeePartyId: {type: GraphQLString},
    employeeRoleTypeId: {type: GraphQLString},
    perfRatingTypeId: {type: GraphQLString},
    perfReviewId: {type: GraphQLString},
    perfReviewItemSeqId: {type: GraphQLString},
    perfReviewItemTypeId: {type: GraphQLString}
  })
});

export {PerfReviewItemInputType};
    