
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategory} from '../product/ProductCategory.js';
import {ProductPromo} from '../product/ProductPromo.js';


const ProductPromoCategory = new GraphQLObjectType({
  name: 'ProductPromoCategoryType',
  description: 'Type for ProductPromoCategory in product',

  fields: () => ({
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productPromoCategory, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    andGroupId: {type: GraphQLString},
    productPromoActionSeqId: {type: GraphQLString},
    productPromoRuleId: {type: GraphQLString},
    includeSubCategories: {type: GraphQLBoolean},
    productPromoApplEnumId: {type: GraphQLString},
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (productPromoCategory, args, {loaders}) => loaders.ofbizArray.load(`productPromos/find?=${args.productPromoId}`)
    },
    productPromoCondSeqId: {type: GraphQLString}
  })
});

export {ProductPromoCategory};
    