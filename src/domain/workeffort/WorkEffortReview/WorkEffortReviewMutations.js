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
import {WorkEffortReviewResponseType} from '../../workeffort/WorkEffortReview/WorkEffortReviewResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortReview = {
  type: WorkEffortReviewResponseType,
  description: 'mutation for ofbiz createWorkEffortReview method',
  args:{workEffortReviewToBeAdded: {type: WorkEffortReviewInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortReviews/add?`, args.workEffortReviewToBeAdded, req);
  }
};
export {createWorkEffortReview};


const updateWorkEffortReview = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortReview method',
  args:{workEffortReviewToBeUpdated: {type: WorkEffortReviewInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortReviews/${args.nullVal}?`, args.workEffortReviewToBeUpdated, req);
  }
};
export {updateWorkEffortReview};


const deleteWorkEffortReviewByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortReviewByIdUpdated method',
  args:{workEffortReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortReviews/${args.workEffortReviewId}?`, null, req);
  }
};
export {deleteWorkEffortReviewByIdUpdated};
