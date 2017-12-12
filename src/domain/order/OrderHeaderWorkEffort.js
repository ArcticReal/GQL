
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

import {OrderHeaderType} from '../order/OrderHeader.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';


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
    




const OrderHeaderWorkEffortInputType = new GraphQLInputObjectType({
  name: 'OrderHeaderWorkEffortInputType',
  description: 'input type for OrderHeaderWorkEffort in order',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {OrderHeaderWorkEffortInputType};
    