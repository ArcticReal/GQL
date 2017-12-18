
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

import {OrderItemType} from '../order/OrderItem.js';
import {UserLoginType} from '../login/UserLogin.js';


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
      resolve: (orderItemChange, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${orderItemChange.changeUserLogin}`)
    },
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemChange, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${orderItemChange.orderId}`)
    },
    changeComments: {type: GraphQLString},
    itemDescription: {type: GraphQLString},
    reasonEnumId: {type: GraphQLString},
    cancelQuantity: {type: GraphQLFloat},
    changeDatetime: {type: GraphQLString}
  })
});

export {OrderItemChangeType};
    




const OrderItemChangeInputType = new GraphQLInputObjectType({
  name: 'OrderItemChangeInputType',
  description: 'input type for OrderItemChange',

  fields: () => ({
    cancelQuantity: {type: GraphQLFloat},
    changeComments: {type: GraphQLString},
    changeDatetime: {type: GraphQLString},
    changeTypeEnumId: {type: GraphQLString},
    changeUserLogin: {type: GraphQLString},
    itemDescription: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemChangeId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reasonEnumId: {type: GraphQLString},
    unitPrice: {type: GraphQLFloat}
  })
});

export {OrderItemChangeInputType};
    