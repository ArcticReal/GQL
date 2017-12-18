
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

import {OrderHeaderType} from '../order/OrderHeader.js';


const OrderAttributeType = new GraphQLObjectType({
  name: 'OrderAttributeType',
  description: 'Type for OrderAttribute in order',

  fields: () => ({
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderAttribute, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderAttribute.orderId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderAttributeType};
    




const OrderAttributeInputType = new GraphQLInputObjectType({
  name: 'OrderAttributeInputType',
  description: 'input type for OrderAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    orderId: {type: GraphQLString}
  })
});

export {OrderAttributeInputType};
    