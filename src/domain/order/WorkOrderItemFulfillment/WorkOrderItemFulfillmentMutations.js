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
import {WorkOrderItemFulfillmentResponseType} from '../../order/WorkOrderItemFulfillment/WorkOrderItemFulfillmentResponseType.js';
import {WorkOrderItemFulfillmentInputType} from '../../order/WorkOrderItemFulfillment/WorkOrderItemFulfillmentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkOrderItemFulfillment = {
  type: WorkOrderItemFulfillmentResponseType,
  description: 'mutation for ofbiz createWorkOrderItemFulfillment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/workOrderItemFulfillments/add?`, null, req);
  }
};
export {createWorkOrderItemFulfillment};


const updateWorkOrderItemFulfillment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkOrderItemFulfillment method',
  args:{workOrderItemFulfillmentToBeUpdated: {type: WorkOrderItemFulfillmentInputType},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/workOrderItemFulfillments/${args.orderItemSeqId}?`, args.workOrderItemFulfillmentToBeUpdated, req);
  }
};
export {updateWorkOrderItemFulfillment};


const deleteWorkOrderItemFulfillmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkOrderItemFulfillmentByIdUpdated method',
  args:{workOrderItemFulfillmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/workOrderItemFulfillments/${args.workOrderItemFulfillmentId}?`, null, req);
  }
};
export {deleteWorkOrderItemFulfillmentByIdUpdated};
