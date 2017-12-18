
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {OrderItemType} from '../order/OrderItem.js';


const WorkOrderItemFulfillmentType = new GraphQLObjectType({
  name: 'WorkOrderItemFulfillmentType',
  description: 'Type for WorkOrderItemFulfillment in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workOrderItemFulfillment, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workOrderItemFulfillment.workEffortId}`)
    },
    orderItemSeqId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (workOrderItemFulfillment, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${workOrderItemFulfillment.orderId}`)
    },
    shipGroupSeqId: {type: GraphQLString}
  })
});

export {WorkOrderItemFulfillmentType};
    




const WorkOrderItemFulfillmentInputType = new GraphQLInputObjectType({
  name: 'WorkOrderItemFulfillmentInputType',
  description: 'input type for WorkOrderItemFulfillment',

  fields: () => ({
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkOrderItemFulfillmentInputType};
    