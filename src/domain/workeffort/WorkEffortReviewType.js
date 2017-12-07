
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const WorkEffortReviewType = new GraphQLObjectType({
  name: 'WorkEffortReviewType',
  description: 'Type for WorkEffortReview in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortReview, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortReview.workEffortId}`)
    },
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (workEffortReview, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${workEffortReview.userLoginId}`)
    },
    statusId: {type: GraphQLString},
    reviewDate: {type: GraphQLString},
    rating: {type: GraphQLFloat},
    postedAnonymous: {type: GraphQLBoolean},
    reviewText: {type: GraphQLString}
  })
});

export {WorkEffortReviewType};
    