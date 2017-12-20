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
import {OrderBlacklistTypeInputType} from '../../order/OrderBlacklistType/OrderBlacklistTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderBlacklistType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderBlacklistType method',
  args:{orderBlacklistTypeToBeAdded: {type: OrderBlacklistTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderBlacklist/orderBlacklistTypes/add?`, args.orderBlacklistTypeToBeAdded, req);
  }
};
export {createOrderBlacklistType};


const updateOrderBlacklistType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderBlacklistType method',
  args:{orderBlacklistTypeToBeUpdated: {type: OrderBlacklistTypeInputType},orderBlacklistTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderBlacklist/orderBlacklistTypes/${args.orderBlacklistTypeId}?`, args.orderBlacklistTypeToBeUpdated, req);
  }
};
export {updateOrderBlacklistType};


const deleteOrderBlacklistTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderBlacklistTypeByIdUpdated method',
  args:{orderBlacklistTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderBlacklist/orderBlacklistTypes/${args.orderBlacklistTypeId}?`, null, req);
  }
};
export {deleteOrderBlacklistTypeByIdUpdated};
