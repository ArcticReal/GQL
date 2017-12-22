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
import {PerfReviewInputType} from '../../humanres/PerfReview/PerfReviewInputType.js';
import {PerfReviewResponseType} from '../../humanres/PerfReview/PerfReviewResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPerfReview = {
  type: PerfReviewResponseType,
  description: 'mutation for ofbiz createPerfReview method',
  args:{perfReviewToBeAdded: {type: PerfReviewInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/perfReviews/add?`, args.perfReviewToBeAdded, req);
  }
};
export {createPerfReview};


const updatePerfReview = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePerfReview method',
  args:{perfReviewToBeUpdated: {type: PerfReviewInputType},perfReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/perfReviews/${args.perfReviewId}?`, args.perfReviewToBeUpdated, req);
  }
};
export {updatePerfReview};


const deletePerfReviewByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePerfReviewByIdUpdated method',
  args:{perfReviewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/perfReviews/${args.perfReviewId}?`, null, req);
  }
};
export {deletePerfReviewByIdUpdated};
