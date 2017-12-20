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
import {OrderSummaryEntryInputType} from '../../order/OrderSummaryEntry/OrderSummaryEntryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderSummaryEntry = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderSummaryEntry method',
  args:{orderSummaryEntryToBeAdded: {type: OrderSummaryEntryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderSummaryEntrys/add?`, args.orderSummaryEntryToBeAdded, req);
  }
};
export {createOrderSummaryEntry};


const updateOrderSummaryEntry = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderSummaryEntry method',
  args:{orderSummaryEntryToBeUpdated: {type: OrderSummaryEntryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderSummaryEntrys/${args.nullVal}?`, args.orderSummaryEntryToBeUpdated, req);
  }
};
export {updateOrderSummaryEntry};


const deleteOrderSummaryEntryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderSummaryEntryByIdUpdated method',
  args:{orderSummaryEntryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderSummaryEntrys/${args.orderSummaryEntryId}?`, null, req);
  }
};
export {deleteOrderSummaryEntryByIdUpdated};
