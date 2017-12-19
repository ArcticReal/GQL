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
import {ReturnReasonInputType} from '../../order/ReturnReason/ReturnReasonInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createReturnReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz createReturnReason method',
  args:{returnReasonToBeAdded: {type: ReturnReasonInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnReasons/add?`, args.returnReasonToBeAdded, req);
  }
};
export {createReturnReason};


const updateReturnReason = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnReason method',
  args:{returnReasonToBeUpdated: {type: ReturnReasonInputType},returnReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnReasons/${args.returnReasonId}?`, args.returnReasonToBeUpdated, req);
  }
};
export {updateReturnReason};


const deleteReturnReasonByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnReasonByIdUpdated method',
  args:{returnReasonId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnReasons/${args.returnReasonId}?`, null, req);
  }
};
export {deleteReturnReasonByIdUpdated};
