
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
import {UserLoginType} from '../login/UserLogin.js';


const OrderStatusType = new GraphQLObjectType({
  name: 'OrderStatusType',
  description: 'Type for OrderStatus in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    orderStatusId: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    statusUserLogin: {
      type: UserLoginType,
      args : {statusUserLogin: {type: GraphQLString}},
      resolve: (orderStatus, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${orderStatus.statusUserLogin}`)
    },
    changeReason: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderStatus, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderStatus.orderId}`)
    },
    statusDatetime: {type: GraphQLString}
  })
});

export {OrderStatusType};
    




const OrderStatusInputType = new GraphQLInputObjectType({
  name: 'OrderStatusInputType',
  description: 'input type for OrderStatus in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    orderStatusId: {type: GraphQLString},
    orderPaymentPreferenceId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    statusUserLogin: {type: GraphQLString},
    changeReason: {type: GraphQLString},
    orderId: {type: GraphQLString},
    statusDatetime: {type: GraphQLString}
  })
});

export {OrderStatusInputType};
    