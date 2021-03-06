
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

import {OrderAdjustmentType} from '../../order/OrderAdjustment/OrderAdjustmentType.js';


const OrderAdjustmentAttributeType = new GraphQLObjectType({
  name: 'OrderAdjustmentAttributeType',
  description: 'Type for OrderAdjustmentAttribute in order',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    orderAdjustment: {
      type: OrderAdjustmentType,
      args : {orderAdjustmentId: {type: GraphQLString}},
      resolve: (orderAdjustmentAttribute, args, {loaders}) => loaders.ofbiz.load(`order/orderAdjustments/find?orderAdjustmentId=${orderAdjustmentAttribute.orderAdjustmentId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {OrderAdjustmentAttributeType};
    