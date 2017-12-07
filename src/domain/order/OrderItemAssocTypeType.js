
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderItemAssocType} from '../order/OrderItemAssocType.js';


const OrderItemAssocTypeType = new GraphQLObjectType({
  name: 'OrderItemAssocTypeType',
  description: 'Type for OrderItemAssocType in order',

  fields: () => ({
    parentType: {
      type: OrderItemAssocTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (orderItemAssocType, args, {loaders}) => loaders.ofbiz.load(`orderItemAssocTypes/find?orderItemAssocTypeId=${orderItemAssocType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    orderItemAssocTypeId: {type: GraphQLString},
    orderItemAssoc: {
      type: new GraphQLList(OrderItemAssocType),
      args : {orderItemAssocTypeId: {type: GraphQLString}},
      resolve: (orderItemAssocType, args, {loaders}) => loaders.ofbizArray.load(`orderItemAssocs/find?orderItemAssocTypeId=${orderItemAssocType.orderItemAssocTypeId}`)
    },
    orderItemAssocType: {
      type: new GraphQLList(OrderItemAssocTypeType),
      args : {orderItemAssocTypeId: {type: GraphQLString}},
      resolve: (orderItemAssocType, args, {loaders}) => loaders.ofbizArray.load(`orderItemAssocTypes/find?orderItemAssocTypeId=${orderItemAssocType.orderItemAssocTypeId}`)
    }
  })
});

export {OrderItemAssocTypeType};
    