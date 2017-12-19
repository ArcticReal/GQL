
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

import {ProductPromoType} from '../../product/ProductPromo/ProductPromoType.js';
import {ProductPromoCondType} from '../../product/ProductPromoCond/ProductPromoCondType.js';
import {ProductPromoActionType} from '../../product/ProductPromoAction/ProductPromoActionType.js';


const ProductPromoRuleType = new GraphQLObjectType({
  name: 'ProductPromoRuleType',
  description: 'Type for ProductPromoRule in product',

  fields: () => ({
    productPromoRuleId: {type: GraphQLString},
    ruleName: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoRule, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${productPromoRule.productPromoId}`)
    },
    productPromoConds: {
      type: new GraphQLList(ProductPromoCondType),
      args : {},
      resolve: (productPromoRule, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoConds/find?productPromoId=${productPromoRule.productPromoId}`)
    },
    productPromoActions: {
      type: new GraphQLList(ProductPromoActionType),
      args : {},
      resolve: (productPromoRule, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoActions/find?productPromoId=${productPromoRule.productPromoId}`)
    }
  })
});

export {ProductPromoRuleType};
    