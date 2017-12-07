
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderHeaderType} from '../order/OrderHeaderType.js';


const OrderDeliveryScheduleType = new GraphQLObjectType({
  name: 'OrderDeliveryScheduleType',
  description: 'Type for OrderDeliverySchedule in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    skidsPallets: {type: GraphQLInt},
    unitsPieces: {type: GraphQLFloat},
    statusId: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderDeliverySchedule, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderDeliverySchedule.orderId}`)
    },
    totalWeight: {type: GraphQLFloat},
    totalCubicSize: {type: GraphQLFloat},
    totalWeightUomId: {type: GraphQLString},
    estimatedReadyDate: {type: GraphQLString},
    totalCubicUomId: {type: GraphQLString},
    cartons: {type: GraphQLInt}
  })
});

export {OrderDeliveryScheduleType};
    