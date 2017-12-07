
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
import {OrderTypeAttrType} from '../order/OrderTypeAttrType.js';


const OrderTypeType = new GraphQLObjectType({
  name: 'OrderTypeType',
  description: 'Type for OrderType in order',

  fields: () => ({
    parentType: {
      type: OrderTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (orderType, args, {loaders}) => loaders.ofbiz.load(`orderTypes/find?orderTypeId=${orderType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    orderTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    orderHeader: {
      type: new GraphQLList(OrderHeaderType),
      args : {orderTypeId: {type: GraphQLString}},
      resolve: (orderType, args, {loaders}) => loaders.ofbizArray.load(`orderHeaders/find?orderTypeId=${orderType.orderTypeId}`)
    },
    orderType: {
      type: new GraphQLList(OrderTypeType),
      args : {orderTypeId: {type: GraphQLString}},
      resolve: (orderType, args, {loaders}) => loaders.ofbizArray.load(`orderTypes/find?orderTypeId=${orderType.orderTypeId}`)
    },
    orderTypeAttr: {
      type: new GraphQLList(OrderTypeAttrType),
      args : {orderTypeId: {type: GraphQLString}},
      resolve: (orderType, args, {loaders}) => loaders.ofbizArray.load(`orderTypeAttrs/find?orderTypeId=${orderType.orderTypeId}`)
    }
  })
});

export {OrderTypeType};
    