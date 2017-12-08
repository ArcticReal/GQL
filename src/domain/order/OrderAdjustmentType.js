
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
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbiz.load(`orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustmentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    orderAdjustmentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    orderAdjustmentTypes: {
      type: new GraphQLList(OrderAdjustmentTypeType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustmentTypes/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    quoteAdjustments: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`quoteAdjustments/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    productPromoActions: {
      type: new GraphQLList(ProductPromoActionType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`productPromoActions/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    orderAdjustmentTypeAttrs: {
      type: new GraphQLList(OrderAdjustmentTypeAttrType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustmentTypeAttrs/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (orderAdjustmentType, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?orderAdjustmentTypeId=${orderAdjustmentType.orderAdjustmentTypeId}`)
    }
  })
});

export {OrderAdjustmentTypeType};
    




const OrderAdjustmentTypeInputType = new GraphQLInputObjectType({
  name: 'OrderAdjustmentTypeInputType',
  description: 'input type for OrderAdjustmentType in order',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    orderAdjustmentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {OrderAdjustmentTypeInputType};
    