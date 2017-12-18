
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

import {OrderAdjustmentType} from '../order/OrderAdjustment.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustment.js';
import {ProductPromoActionType} from '../product/ProductPromoAction.js';
import {OrderAdjustmentTypeAttrType} from '../order/OrderAdjustmentTypeAttr.js';


const OrderAdjustmentTypeType = new GraphQLObjectType({
  name: 'OrderAdjustmentTypeType',
  description: 'Type for OrderAdjustmentType in order',

  fields: () => ({
    parentType: {
      type: OrderAdjustmentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbiz.load(`order/orderAdjustment/orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustmentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    orderAdjustmentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    orderAdjustmentTypes: {
      type: new GraphQLList(OrderAdjustmentTypeType),
      args : {},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustment/orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    quoteAdjustments: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteAdjustments/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    productPromoActions: {
      type: new GraphQLList(ProductPromoActionType),
      args : {},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoActions/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    orderAdjustmentTypeAttrs: {
      type: new GraphQLList(OrderAdjustmentTypeAttrType),
      args : {},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustment/orderAdjustmentTypeAttrs/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustments/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    }
  })
});

export {OrderAdjustmentTypeType};
    




const OrderAdjustmentTypeInputType = new GraphQLInputObjectType({
  name: 'OrderAdjustmentTypeInputType',
  description: 'input type for OrderAdjustmentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    orderAdjustmentTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {OrderAdjustmentTypeInputType};
    