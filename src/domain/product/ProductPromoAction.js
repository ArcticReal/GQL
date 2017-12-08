
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

import {ProductPromoRuleType} from '../product/ProductPromoRule.js';
import {OrderAdjustmentTypeType} from '../order/OrderAdjustmentType.js';


const ProductPromoActionType = new GraphQLObjectType({
  name: 'ProductPromoActionType',
  description: 'Type for ProductPromoAction in product',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    orderAdjustmentType: {
      type: OrderAdjustmentTypeType,
      args : {orderAdjustmentTypeId: {type: GraphQLString}},
      resolve: (productPromoAction, args, {loaders}) => loaders.ofbiz.load(`orderAdjustmentTypes/find?orderAdjustmentTypeId=${productPromoAction.orderAdjustmentTypeId}`)
    },
    useCartQuantity: {type: GraphQLBoolean},
    productPromoActionEnumId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoRuleType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoAction, args, {loaders}) => loaders.ofbiz.load(`productPromoRules/find?productPromoId=${productPromoAction.productPromoId}`)
    },
    serviceName: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {ProductPromoActionType};
    




const ProductPromoActionInputType = new GraphQLInputObjectType({
  name: 'ProductPromoActionInputType',
  description: 'input type for ProductPromoAction in product',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    orderAdjustmentTypeId: {type: GraphQLString},
    useCartQuantity: {type: GraphQLBoolean},
    productPromoActionEnumId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    serviceName: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {ProductPromoActionInputType};
    