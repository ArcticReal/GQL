
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

import {ProductFeatureCategoryType} from '../product/ProductFeatureCategory.js';
import {ProductCategoryType} from '../product/ProductCategory.js';


const ProductFeatureCategoryApplType = new GraphQLObjectType({
  name: 'ProductFeatureCategoryApplType',
  description: 'Type for ProductFeatureCategoryAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategoryAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${productFeatureCategoryAppl.productCategoryId}`)
    },
    productFeatureCategory: {
      type: ProductFeatureCategoryType,
      args : {productFeatureCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategoryAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatureCategorys/find?productFeatureCategoryId=${productFeatureCategoryAppl.productFeatureCategoryId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCategoryApplType};
    




const ProductFeatureCategoryApplInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureCategoryApplInputType',
  description: 'input type for ProductFeatureCategoryAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productFeatureCategoryId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCategoryApplInputType};
    