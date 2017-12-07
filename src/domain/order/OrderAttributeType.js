
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
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {OrderAttributeType};
    