
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

import {OrderItemAssocType} from '../order/OrderItemAssoc.js';


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
    orderItemAssocs: {
      type: new GraphQLList(OrderItemAssocType),
      args : {orderItemAssocTypeId: {type: GraphQLString}},
      resolve: (orderItemAssocType, args, {loaders}) => loaders.ofbizArray.load(`orderItemAssocs/find?orderItemAssocTypeId=${orderItemAssocType.orderItemAssocTypeId}`)
    },
    orderItemAssocTypes: {
      type: new GraphQLList(OrderItemAssocTypeType),
      args : {orderItemAssocTypeId: {type: GraphQLString}},
      resolve: (orderItemAssocType, args, {loaders}) => loaders.ofbizArray.load(`orderItemAssocTypes/find?orderItemAssocTypeId=${orderItemAssocType.orderItemAssocTypeId}`)
    }
  })
});

export {OrderItemAssocTypeType};
    




const OrderItemAssocTypeInputType = new GraphQLInputObjectType({
  name: 'OrderItemAssocTypeInputType',
  description: 'input type for OrderItemAssocType in order',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    orderItemAssocTypeId: {type: GraphQLString}
  })
});

export {OrderItemAssocTypeInputType};
    