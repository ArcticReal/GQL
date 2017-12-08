
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

import {OrderTypeType} from '../order/OrderType.js';


const OrderTypeAttrType = new GraphQLObjectType({
  name: 'OrderTypeAttrType',
  description: 'Type for OrderTypeAttr in order',

  fields: () => ({
    orderType: {
      type: OrderTypeType,
      args : {orderTypeId: {type: GraphQLString}},
      resolve: (orderTypeAttr, args, {loaders}) => loaders.ofbiz.load(`orderTypes/find?orderTypeId=${orderTypeAttr.orderTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderTypeAttrType};
    




const OrderTypeAttrInputType = new GraphQLInputObjectType({
  name: 'OrderTypeAttrInputType',
  description: 'input type for OrderTypeAttr in order',

  fields: () => ({
    orderTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderTypeAttrInputType};
    