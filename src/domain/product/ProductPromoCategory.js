
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
      resolve: (productPromoCategory, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productPromoCategory.productCategoryId}`)
    },
    andGroupId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    productPromoApplEnumId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoCategory, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${productPromoCategory.productPromoId}`)
    },
    productPromoCondSeqId: {type: GraphQLString}
  })
});

export {ProductPromoCategoryType};
    




const ProductPromoCategoryInputType = new GraphQLInputObjectType({
  name: 'ProductPromoCategoryInputType',
  description: 'input type for ProductPromoCategory in product',

  fields: () => ({
    productCategoryId: {type: GraphQLString},
    andGroupId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    productPromoApplEnumId: {type: GraphQLString},
    productPromoId: {type: GraphQLString},
    productPromoCondSeqId: {type: GraphQLString}
  })
});

export {ProductPromoCategoryInputType};
    