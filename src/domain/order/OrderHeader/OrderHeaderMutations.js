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
import {OrderHeaderInputType} from '../../order/OrderHeader/OrderHeaderInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderHeader = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderHeader method',
  args:{orderHeaderToBeAdded: {type: OrderHeaderInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderHeaders/add?`, args.orderHeaderToBeAdded, req);
  }
};
export {createOrderHeader};


const deleteOrderHeaderByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderHeaderByIdUpdated method',
  args:{orderHeaderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderHeaders/${args.orderHeaderId}?`, null, req);
  }
};
export {deleteOrderHeaderByIdUpdated};


const updateOrderHeader = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderHeader method',
  args:{orderHeaderToBeUpdated: {type: OrderHeaderInputType},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderHeaders/${args.orderId}?`, args.orderHeaderToBeUpdated, req);
  }
};
export {updateOrderHeader};
