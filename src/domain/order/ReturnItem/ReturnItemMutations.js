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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createReturnItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz createReturnItem method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnItems/add?`, null, req);
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
