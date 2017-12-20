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
import {OrderBlacklistInputType} from '../../order/OrderBlacklist/OrderBlacklistInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderBlacklist = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderBlacklist method',
  args:{orderBlacklistToBeAdded: {type: OrderBlacklistInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderBlacklists/add?`, args.orderBlacklistToBeAdded, req);
  }
};
export {createOrderBlacklist};


const updateOrderBlacklist = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderBlacklist method',
  args:{orderBlacklistToBeUpdated: {type: OrderBlacklistInputType},blacklistString: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderBlacklists/${args.blacklistString}?`, args.orderBlacklistToBeUpdated, req);
  }
};
export {updateOrderBlacklist};


const deleteOrderBlacklistByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderBlacklistByIdUpdated method',
  args:{orderBlacklistId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderBlacklists/${args.orderBlacklistId}?`, null, req);
  }
};
export {deleteOrderBlacklistByIdUpdated};
