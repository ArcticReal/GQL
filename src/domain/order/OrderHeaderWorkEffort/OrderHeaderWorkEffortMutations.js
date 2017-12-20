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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderHeaderWorkEffort = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderHeaderWorkEffort method',
  args:{orderHeaderWorkEffortToBeAdded: {type: OrderHeaderWorkEffortInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderHeader/orderHeaderWorkEfforts/add?`, args.orderHeaderWorkEffortToBeAdded, req);
  }
};
export {createOrderHeaderWorkEffort};


const updateOrderHeaderWorkEffort = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderHeaderWorkEffort method',
  args:{orderHeaderWorkEffortToBeUpdated: {type: OrderHeaderWorkEffortInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderHeader/orderHeaderWorkEfforts/${args.nullVal}?`, args.orderHeaderWorkEffortToBeUpdated, req);
  }
};
export {updateOrderHeaderWorkEffort};


const deleteOrderHeaderWorkEffortByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderHeaderWorkEffortByIdUpdated method',
  args:{orderHeaderWorkEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderHeader/orderHeaderWorkEfforts/${args.orderHeaderWorkEffortId}?`, null, req);
  }
};
export {deleteOrderHeaderWorkEffortByIdUpdated};
