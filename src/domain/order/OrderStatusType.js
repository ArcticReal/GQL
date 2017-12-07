
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
import {UserLoginType} from '../login/UserLoginType.js';


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
      resolve: (orderStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${orderStatus.statusUserLogin}`)
    },
    changeReason: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderStatus, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderStatus.orderId}`)
    },
    statusDatetime: {type: GraphQLString}
  })
});

export {OrderStatusType};
    