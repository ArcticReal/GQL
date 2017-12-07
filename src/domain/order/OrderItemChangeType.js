
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderItemType} from '../order/OrderItemType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const OrderItemChangeType = new GraphQLObjectType({
  name: 'OrderItemChangeType',
  description: 'Type for OrderItemChange in order',

  fields: () => ({
    orderItemChangeId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    unitPrice: {type: GraphQLFloat},
    changeTypeEnumId: {type: GraphQLString},
    changeUserLogin: {
      type: UserLoginType,
      args : {changeUserLogin: {type: GraphQLString}},
      resolve: (orderItemChange, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${orderItemChange.changeUserLogin}`)
    },
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemChange, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${orderItemChange.orderId}`)
    },
    changeComments: {type: GraphQLString},
    itemDescription: {type: GraphQLString},
    reasonEnumId: {type: GraphQLString},
    cancelQuantity: {type: GraphQLFloat},
    changeDatetime: {type: GraphQLString}
  })
});

export {OrderItemChangeType};
    