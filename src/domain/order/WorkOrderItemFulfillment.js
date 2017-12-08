
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
      resolve: (workOrderItemFulfillment, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workOrderItemFulfillment.workEffortId}`)
    },
    orderItemSeqId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (workOrderItemFulfillment, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${workOrderItemFulfillment.orderId}`)
    },
    shipGroupSeqId: {type: GraphQLString}
  })
});

export {WorkOrderItemFulfillmentType};
    




const WorkOrderItemFulfillmentInputType = new GraphQLInputObjectType({
  name: 'WorkOrderItemFulfillmentInputType',
  description: 'input type for WorkOrderItemFulfillment in order',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString}
  })
});

export {WorkOrderItemFulfillmentInputType};
    