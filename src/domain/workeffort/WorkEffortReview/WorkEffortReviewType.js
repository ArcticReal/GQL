
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


const WorkEffortReviewType = new GraphQLObjectType({
  name: 'WorkEffortReviewType',
  description: 'Type for WorkEffortReview in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortReview, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortReview.workEffortId}`)
    },
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (workEffortReview, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${workEffortReview.userLoginId}`)
    },
    statusId: {type: GraphQLString},
    reviewDate: {type: GraphQLString},
    rating: {type: GraphQLFloat},
    postedAnonymous: {type: GraphQLBoolean},
    reviewText: {type: GraphQLString}
  })
});

export {WorkEffortReviewType};
    