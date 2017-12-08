
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {UserLoginType} from '../login/UserLogin.js';


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
    




const WorkEffortReviewInputType = new GraphQLInputObjectType({
  name: 'WorkEffortReviewInputType',
  description: 'input type for WorkEffortReview in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    userLoginId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    reviewDate: {type: GraphQLString},
    rating: {type: GraphQLFloat},
    postedAnonymous: {type: GraphQLBoolean},
    reviewText: {type: GraphQLString}
  })
});

export {WorkEffortReviewInputType};
    