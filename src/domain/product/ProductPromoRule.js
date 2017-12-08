
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

import {ProductPromoType} from '../product/ProductPromo.js';
import {ProductPromoCondType} from '../product/ProductPromoCond.js';
import {ProductPromoActionType} from '../product/ProductPromoAction.js';


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
    productPromoConds: {
      type: new GraphQLList(ProductPromoCondType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoRule, args, {loaders}) => loaders.ofbizArray.load(`productPromoConds/find?productPromoId=${productPromoRule.productPromoId}`)
    },
    productPromoActions: {
      type: new GraphQLList(ProductPromoActionType),
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoRule, args, {loaders}) => loaders.ofbizArray.load(`productPromoActions/find?productPromoId=${productPromoRule.productPromoId}`)
    }
  })
});

export {ProductPromoRuleType};
    




const ProductPromoRuleInputType = new GraphQLInputObjectType({
  name: 'ProductPromoRuleInputType',
  description: 'input type for ProductPromoRule in product',

  fields: () => ({
    productPromoRuleId: {type: GraphQLString},
    ruleName: {type: GraphQLString},
    productPromoId: {type: GraphQLString}
  })
});

export {ProductPromoRuleInputType};
    