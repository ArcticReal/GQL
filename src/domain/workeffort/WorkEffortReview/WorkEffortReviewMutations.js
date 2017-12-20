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
import {WorkEffortReviewInputType} from '../../workeffort/WorkEffortReview/WorkEffortReviewInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortReview = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortReview method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortReviews/add?`, null, req);
  }
};
export {createWorkEffortReview};


const updateWorkEffortReview = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortReview method',
  args:{workEffortReviewToBeUpdated: {type: WorkEffortReviewInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortReviews/${args.nullVal}?`, args.workEffortReviewToBeUpdated, req);
  }
};
export {updateWorkEffortReview};


const deleteWorkEffortReviewByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortReviewByIdUpdated method',
  args:{workEffortReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortReviews/${args.workEffortReviewId}?`, null, req);
  }
};
export {deleteWorkEffortReviewByIdUpdated};
