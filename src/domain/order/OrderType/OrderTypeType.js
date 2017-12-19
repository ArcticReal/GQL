
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

import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {OrderTypeAttrType} from '../../order/OrderTypeAttr/OrderTypeAttrType.js';


const OrderTypeType = new GraphQLObjectType({
  name: 'OrderTypeType',
  description: 'Type for OrderType in order',

  fields: () => ({
    parentType: {
      type: OrderTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (orderType, args, {loaders}) => loaders.ofbiz.load(`order/orderTypes/find?orderTypeId=${orderType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    orderTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    orderHeaders: {
      type: new GraphQLList(OrderHeaderType),
      args : {},
      resolve: (orderType, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeaders/find?orderTypeId=${orderType.orderTypeId}`)
    },
    orderTypes: {
      type: new GraphQLList(OrderTypeType),
      args : {},
      resolve: (orderType, args, {loaders}) => loaders.ofbizArray.load(`order/orderTypes/find?orderTypeId=${orderType.orderTypeId}`)
    },
    orderTypeAttrs: {
      type: new GraphQLList(OrderTypeAttrType),
      args : {},
      resolve: (orderType, args, {loaders}) => loaders.ofbizArray.load(`order/orderType/orderTypeAttrs/find?orderTypeId=${orderType.orderTypeId}`)
    }
  })
});

export {OrderTypeType};
    