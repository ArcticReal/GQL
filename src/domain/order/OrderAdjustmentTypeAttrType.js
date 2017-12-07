
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderAdjustmentTypeType} from '../order/OrderAdjustmentTypeType.js';


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
    