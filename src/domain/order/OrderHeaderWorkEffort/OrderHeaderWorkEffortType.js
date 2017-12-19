
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

import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';


const OrderHeaderWorkEffortType = new GraphQLObjectType({
  name: 'OrderHeaderWorkEffortType',
  description: 'Type for OrderHeaderWorkEffort in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (orderHeaderWorkEffort, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${orderHeaderWorkEffort.workEffortId}`)
    },
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeaderWorkEffort, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderHeaderWorkEffort.orderId}`)
    }
  })
});

export {OrderHeaderWorkEffortType};
    