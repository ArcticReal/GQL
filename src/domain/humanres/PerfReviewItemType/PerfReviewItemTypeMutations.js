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
import {PerfReviewItemTypeInputType} from '../../humanres/PerfReviewItemType/PerfReviewItemTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPerfReviewItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPerfReviewItemType method',
  args:{perfReviewItemTypeToBeAdded: {type: PerfReviewItemTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`humanres/perfReview/perfReviewItemTypes/add?`, args.perfReviewItemTypeToBeAdded, req);
  }
};
export {createPerfReviewItemType};


const updatePerfReviewItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePerfReviewItemType method',
  args:{perfReviewItemTypeToBeUpdated: {type: PerfReviewItemTypeInputType},perfReviewItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`humanres/perfReview/perfReviewItemTypes/${args.perfReviewItemTypeId}?`, args.perfReviewItemTypeToBeUpdated, req);
  }
};
export {updatePerfReviewItemType};


const deletePerfReviewItemTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePerfReviewItemTypeByIdUpdated method',
  args:{perfReviewItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`humanres/perfReview/perfReviewItemTypes/${args.perfReviewItemTypeId}?`, null, req);
  }
};
export {deletePerfReviewItemTypeByIdUpdated};
