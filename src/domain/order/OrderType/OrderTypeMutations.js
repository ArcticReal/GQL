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
import {OrderTypeResponseType} from '../../order/OrderType/OrderTypeResponseType.js';
import {OrderTypeInputType} from '../../order/OrderType/OrderTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderType = {
  type: OrderTypeResponseType,
  description: 'mutation for ofbiz createOrderType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderTypes/add?`, null, req);
  }
};
export {createOrderType};


const updateOrderType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderType method',
  args:{orderTypeToBeUpdated: {type: OrderTypeInputType},orderTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderTypes/${args.orderTypeId}?`, args.orderTypeToBeUpdated, req);
  }
};
export {updateOrderType};


const deleteOrderTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderTypeByIdUpdated method',
  args:{orderTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderTypes/${args.orderTypeId}?`, null, req);
  }
};
export {deleteOrderTypeByIdUpdated};
