
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {OrderItemType} from '../order/OrderItemType.js';


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
    