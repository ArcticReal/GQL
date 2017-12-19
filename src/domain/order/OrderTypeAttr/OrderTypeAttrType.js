
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

import {OrderTypeType} from '../../order/OrderType/OrderTypeType.js';


const OrderTypeAttrType = new GraphQLObjectType({
  name: 'OrderTypeAttrType',
  description: 'Type for OrderTypeAttr in order',

  fields: () => ({
    orderType: {
      type: OrderTypeType,
      args : {orderTypeId: {type: GraphQLString}},
      resolve: (orderTypeAttr, args, {loaders}) => loaders.ofbiz.load(`order/orderTypes/find?orderTypeId=${orderTypeAttr.orderTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderTypeAttrType};
    