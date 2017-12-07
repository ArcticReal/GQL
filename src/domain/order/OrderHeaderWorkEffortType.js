
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
import {WorkEffortType} from '../workeffort/WorkEffortType.js';


const OrderHeaderWorkEffortType = new GraphQLObjectType({
  name: 'OrderHeaderWorkEffortType',
  description: 'Type for OrderHeaderWorkEffort in order',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (orderHeaderWorkEffort, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${orderHeaderWorkEffort.workEffortId}`)
    },
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeaderWorkEffort, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderHeaderWorkEffort.orderId}`)
    }
  })
});

export {OrderHeaderWorkEffortType};
    