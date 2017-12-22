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

const WorkEffortReviewResponseType = new GraphQLObjectType({
  name: 'WorkEffortReviewResponseType',
  description: 'response type for WorkEffortReview',

  fields: () => ({
    postedAnonymous: {type: GraphQLBoolean},
    rating: {type: GraphQLFloat},
    reviewDate: {type: GraphQLString},
    reviewText: {type: GraphQLString},
    statusId: {type: GraphQLString},
    userLoginId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortReviewResponseType};
    