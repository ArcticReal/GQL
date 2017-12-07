
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderAdjustmentType} from '../order/OrderAdjustmentType.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustmentType.js';
import {ProductPromoActionType} from '../product/ProductPromoActionType.js';
import {OrderAdjustmentTypeAttrType} from '../order/OrderAdjustmentTypeAttrType.js';


const OrderAdjustmentTypeType = new GraphQLObjectType({
  name: 'OrderAdjustmentTypeType',
  description: 'Type for OrderAdjustmentType in order',

  fields: () => ({
    parentType: {
      type: OrderAdjustmentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbiz.load(`orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustmentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    orderAdjustmentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    orderAdjustmentType: {
      type: new GraphQLList(OrderAdjustmentTypeType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    quoteAdjustment: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`quoteAdjustments/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    productPromoAction: {
      type: new GraphQLList(ProductPromoActionType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`productPromoActions/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    orderAdjustmentTypeAttr: {
      type: new GraphQLList(OrderAdjustmentTypeAttrType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustmentTypeAttrs/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    orderAdjustment: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    }
  })
});

export {OrderAdjustmentTypeType};
    