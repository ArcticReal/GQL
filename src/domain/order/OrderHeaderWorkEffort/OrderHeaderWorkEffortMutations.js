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
import {OrderHeaderWorkEffortInputType} from '../../order/OrderHeaderWorkEffort/OrderHeaderWorkEffortInputType.js';
import {OrderHeaderWorkEffortResponseType} from '../../order/OrderHeaderWorkEffort/OrderHeaderWorkEffortResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderHeaderWorkEffort = {
  type: OrderHeaderWorkEffortResponseType,
  description: 'mutation for ofbiz createOrderHeaderWorkEffort method',
  args:{orderHeaderWorkEffortToBeAdded: {type: OrderHeaderWorkEffortInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderHeader/orderHeaderWorkEfforts/add?`, args.orderHeaderWorkEffortToBeAdded, req);
  }
};
export {createOrderHeaderWorkEffort};


const updateOrderHeaderWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderHeaderWorkEffort method',
  args:{orderHeaderWorkEffortToBeUpdated: {type: OrderHeaderWorkEffortInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderHeader/orderHeaderWorkEfforts/${args.nullVal}?`, args.orderHeaderWorkEffortToBeUpdated, req);
  }
};
export {updateOrderHeaderWorkEffort};


const deleteOrderHeaderWorkEffortByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderHeaderWorkEffortByIdUpdated method',
  args:{orderHeaderWorkEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderHeader/orderHeaderWorkEfforts/${args.orderHeaderWorkEffortId}?`, null, req);
  }
};
export {deleteOrderHeaderWorkEffortByIdUpdated};
