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
import {PerfReviewItemInputType} from '../../humanres/PerfReviewItem/PerfReviewItemInputType.js';
import {PerfReviewItemResponseType} from '../../humanres/PerfReviewItem/PerfReviewItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPerfReviewItem = {
  type: PerfReviewItemResponseType,
  description: 'mutation for ofbiz createPerfReviewItem method',
  args:{perfReviewItemToBeAdded: {type: PerfReviewItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/perfReview/perfReviewItems/add?`, args.perfReviewItemToBeAdded, req);
  }
};
export {createPerfReviewItem};


const updatePerfReviewItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePerfReviewItem method',
  args:{perfReviewItemToBeUpdated: {type: PerfReviewItemInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/perfReview/perfReviewItems/${args.nullVal}?`, args.perfReviewItemToBeUpdated, req);
  }
};
export {updatePerfReviewItem};


const deletePerfReviewItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePerfReviewItemByIdUpdated method',
  args:{perfReviewItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/perfReview/perfReviewItems/${args.perfReviewItemId}?`, null, req);
  }
};
export {deletePerfReviewItemByIdUpdated};
