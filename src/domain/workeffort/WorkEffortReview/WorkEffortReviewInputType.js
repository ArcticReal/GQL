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

const WorkEffortReviewInputType = new GraphQLInputObjectType({
  name: 'WorkEffortReviewInputType',
  description: 'input type for WorkEffortReview',

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

export {WorkEffortReviewInputType};
    