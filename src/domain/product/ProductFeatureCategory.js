
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

import {ProductFeatureCategoryApplType} from '../product/ProductFeatureCategoryAppl.js';
import {ProductFeatureType} from '../product/ProductFeature.js';


const ProductFeatureCategoryType = new GraphQLObjectType({
  name: 'ProductFeatureCategoryType',
  description: 'Type for ProductFeatureCategory in product',

  fields: () => ({
    productFeatureCategoryId: {type: GraphQLString},
    description: {type: GraphQLString},
    parentCategory: {
      type: ProductFeatureCategoryType,
      args : {parentCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategory, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatureCategorys/find?productFeatureCategoryId=${productFeatureCategory.parentCategoryId}`)
    },
    productFeatureCategories: {
      type: new GraphQLList(ProductFeatureCategoryType),
      args : {},
      resolve: (productFeatureCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureCategorys/find?productFeatureCategoryId=${productFeatureCategory.productFeatureCategoryId}`)
    },
    productFeatureCategoryAppls: {
      type: new GraphQLList(ProductFeatureCategoryApplType),
      args : {},
      resolve: (productFeatureCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureCategoryAppls/find?productFeatureCategoryId=${productFeatureCategory.productFeatureCategoryId}`)
    },
    productFeatures: {
      type: new GraphQLList(ProductFeatureType),
      args : {},
      resolve: (productFeatureCategory, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatures/find?productFeatureCategoryId=${productFeatureCategory.productFeatureCategoryId}`)
    }
  })
});

export {ProductFeatureCategoryType};
    




const ProductFeatureCategoryInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureCategoryInputType',
  description: 'input type for ProductFeatureCategory in product',

  fields: () => ({
    productFeatureCategoryId: {type: GraphQLString},
    description: {type: GraphQLString},
    parentCategoryId: {type: GraphQLString}
  })
});

export {ProductFeatureCategoryInputType};
    