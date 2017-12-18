
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
import {ProductCategoryType} from '../product/ProductCategory.js';


const ProductPromoCategoryType = new GraphQLObjectType({
  name: 'ProductPromoCategoryType',
  description: 'Type for ProductPromoCategory in product',

  fields: () => ({
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productPromoCategory, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${productPromoCategory.productCategoryId}`)
    },
    andGroupId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    productPromoApplEnumId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoCategory, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${productPromoCategory.productPromoId}`)
    },
    productPromoCondSeqId: {type: GraphQLString}
  })
});

export {ProductPromoCategoryType};
    




const ProductPromoCategoryInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCategoryInputType',
  description: 'input type for ProductPromoCategory',

  fields: () => ({
    andGroupId: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    productCategoryId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoApplEnumId: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString}
  })
});

export {ProductPromoCategoryInputType};
    