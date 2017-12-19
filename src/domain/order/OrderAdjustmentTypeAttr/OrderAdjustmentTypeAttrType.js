
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

import {OrderAdjustmentTypeType} from '../../order/OrderAdjustmentType/OrderAdjustmentTypeType.js';


const OrderAdjustmentTypeAttrType = new GraphQLObjectType({
  name: 'OrderAdjustmentTypeAttrType',
  description: 'Type for OrderAdjustmentTypeAttr in order',

  fields: () => ({
    orderAdjustmentType: {
      type: OrderAdjustmentTypeType,
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`order/orderAdjustment/orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustmentTypeAttr.orderAdjustmentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {OrderAdjustmentTypeAttrType};
    