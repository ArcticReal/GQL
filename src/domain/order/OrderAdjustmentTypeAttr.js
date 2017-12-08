
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

import {OrderAdjustmentTypeType} from '../order/OrderAdjustmentType.js';


const OrderAdjustmentTypeAttrType = new GraphQLObjectType({
  name: 'OrderAdjustmentTypeAttrType',
  description: 'Type for OrderAdjustmentTypeAttr in order',

  fields: () => ({
    orderAdjustmentType: {
      type: OrderAdjustmentTypeType,
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustmentTypeAttr.orderAdjustmentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderAdjustmentTypeAttrType};
    




const OrderAdjustmentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'OrderAdjustmentTypeAttrInputType',
  description: 'input type for OrderAdjustmentTypeAttr in order',

  fields: () => ({
    orderAdjustmentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderAdjustmentTypeAttrInputType};
    