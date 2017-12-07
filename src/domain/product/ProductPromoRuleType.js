
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPromoType} from '../product/ProductPromoType.js';
import {ProductPromoCondType} from '../product/ProductPromoCondType.js';
import {ProductPromoActionType} from '../product/ProductPromoActionType.js';


const ProductPromoRuleType = new GraphQLObjectType({
  name: 'ProductPromoRuleType',
  description: 'Type for ProductPromoRule in product',

  fields: () => ({
    productPromoRuleId: {type: GraphQLString},
    ruleName: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoRule, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${productPromoRule.productPromoId}`)
    },
    productPromoCond: {
      type: new GraphQLList(ProductPromoCondType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoRule, args, {loaders}) => loaders.ofbizArray.load(`productPromoConds/find?productPromoId=${productPromoRule.productPromoId}`)
    },
    productPromoAction: {
      type: new GraphQLList(ProductPromoActionType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoRule, args, {loaders}) => loaders.ofbizArray.load(`productPromoActions/find?productPromoId=${productPromoRule.productPromoId}`)
    }
  })
});

export {ProductPromoRuleType};
    