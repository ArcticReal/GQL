
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
      resolve: (orderAttribute, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderAttribute.orderId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderAttributeType};
    




const OrderAttributeInputType = new GraphQLInputObjectType({
  name: 'OrderAttributeInputType',
  description: 'input type for OrderAttribute in order',

  fields: () => ({
    orderId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderAttributeInputType};
    