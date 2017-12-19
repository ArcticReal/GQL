
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';


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
    