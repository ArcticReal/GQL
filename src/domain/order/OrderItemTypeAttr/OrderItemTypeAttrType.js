
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

import {OrderItemTypeType} from '../../order/OrderItemType/OrderItemTypeType.js';


const OrderItemTypeAttrType = new GraphQLObjectType({
  name: 'OrderItemTypeAttrType',
  description: 'Type for OrderItemTypeAttr in order',

  fields: () => ({
    description: {type: GraphQLString},
    attrName: {type: GraphQLString},
    orderItemType: {
      type: OrderItemTypeType,
      args : {orderItemTypeId: {type: GraphQLString}},
      resolve: (orderItemTypeAttr, args, {loaders}) => loaders.ofbiz.load(`order/orderItem/orderItemTypes/find?orderItemTypeId=${orderItemTypeAttr.orderItemTypeId}`)
    }
  })
});

export {OrderItemTypeAttrType};
    