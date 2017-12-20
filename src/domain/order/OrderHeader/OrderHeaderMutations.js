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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderHeader = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderHeader method',
  args:{orderHeaderToBeAdded: {type: OrderHeaderInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderHeaders/add?`, args.orderHeaderToBeAdded, req);
  }
};
export {createOrderHeader};


const deleteOrderHeaderByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderHeaderByIdUpdated method',
  args:{orderHeaderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderHeaders/${args.orderHeaderId}?`, null, req);
  }
};
export {deleteOrderHeaderByIdUpdated};


const updateOrderHeader = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderHeader method',
  args:{orderHeaderToBeUpdated: {type: OrderHeaderInputType},orderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderHeaders/${args.orderId}?`, args.orderHeaderToBeUpdated, req);
  }
};
export {updateOrderHeader};
