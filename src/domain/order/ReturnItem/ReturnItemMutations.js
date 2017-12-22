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
import {ReturnItemInputType} from '../../order/ReturnItem/ReturnItemInputType.js';
import {ReturnItemResponseType} from '../../order/ReturnItemResponse/ReturnItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnItem = {
  type: ReturnItemResponseType,
  description: 'mutation for ofbiz createReturnItem method',
  args:{returnItemToBeAdded: {type: ReturnItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnItems/add?`, args.returnItemToBeAdded, req);
  }
};
export {createReturnItem};


const deleteReturnItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnItemByIdUpdated method',
  args:{returnItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnItems/${args.returnItemId}?`, null, req);
  }
};
export {deleteReturnItemByIdUpdated};


const updateReturnItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnItem method',
  args:{returnItemToBeUpdated: {type: ReturnItemInputType},returnItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnItems/${args.returnItemSeqId}?`, args.returnItemToBeUpdated, req);
  }
};
export {updateReturnItem};
