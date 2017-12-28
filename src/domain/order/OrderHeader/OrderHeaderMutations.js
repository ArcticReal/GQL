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
import {OrderHeaderResponseType} from '../../order/OrderHeader/OrderHeaderResponseType.js';
import {OrderHeaderInputType} from '../../order/OrderHeader/OrderHeaderInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderHeader = {
  type: OrderHeaderResponseType,
  description: 'mutation for ofbiz createOrderHeader method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderHeaders/add?`, null, req);
  }
};
export {createOrderHeader};


const deleteOrderHeaderByIdUpdated = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteOrderHeaderByIdUpdated method',
  args:{orderHeaderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderHeaders/${args.orderHeaderId}?`, null, req);
  }
};
export {deleteOrderHeaderByIdUpdated};


const updateOrderHeader = {
  type: OrderHeaderResponseType,
  description: 'mutation for ofbiz updateOrderHeader method',
  args:{orderHeaderToBeUpdated: {type: OrderHeaderInputType},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderHeaders/${args.orderId}?`, args.orderHeaderToBeUpdated, req);
  }
};
export {updateOrderHeader};
