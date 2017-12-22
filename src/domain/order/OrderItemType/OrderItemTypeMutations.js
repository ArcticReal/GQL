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
import {OrderItemTypeResponseType} from '../../order/OrderItemType/OrderItemTypeResponseType.js';
import {OrderItemTypeInputType} from '../../order/OrderItemType/OrderItemTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderItemType = {
  type: OrderItemTypeResponseType,
  description: 'mutation for ofbiz createOrderItemType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemTypes/add?`, null, req);
  }
};
export {createOrderItemType};


const updateOrderItemType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemType method',
  args:{orderItemTypeToBeUpdated: {type: OrderItemTypeInputType},orderItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemTypes/${args.orderItemTypeId}?`, args.orderItemTypeToBeUpdated, req);
  }
};
export {updateOrderItemType};


const deleteOrderItemTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemTypeByIdUpdated method',
  args:{orderItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemTypes/${args.orderItemTypeId}?`, null, req);
  }
};
export {deleteOrderItemTypeByIdUpdated};
