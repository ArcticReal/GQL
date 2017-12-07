
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureCategoryApplType} from '../product/ProductFeatureCategoryApplType.js';
import {ProductFeatureType} from '../product/ProductFeatureType.js';


const ProductFeatureCategoryType = new GraphQLObjectType({
  name: 'ProductFeatureCategoryType',
  description: 'Type for ProductFeatureCategory in product',

  fields: () => ({
    productFeatureCategoryId: {type: GraphQLString},
    description: {type: GraphQLString},
    parentCategory: {
      type: ProductFeatureCategoryType,
      args : {parentCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategory, args, {loaders}) => loaders.ofbiz.load(`productFeatureCategorys/find?productFeatureCategoryId=${productFeatureCategory.parentCategoryId}`)
    },
    productFeatureCategory: {
      type: new GraphQLList(ProductFeatureCategoryType),
      args : {productFeatureCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategory, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCategorys/find?productFeatureCategoryId=${productFeatureCategory.productFeatureCategoryId}`)
    },
    productFeatureCategoryAppl: {
      type: new GraphQLList(ProductFeatureCategoryApplType),
      args : {productFeatureCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategory, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCategoryAppls/find?productFeatureCategoryId=${productFeatureCategory.productFeatureCategoryId}`)
    },
    productFeature: {
      type: new GraphQLList(ProductFeatureType),
      args : {productFeatureCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategory, args, {loaders}) => loaders.ofbizArray.load(`productFeatures/find?productFeatureCategoryId=${productFeatureCategory.productFeatureCategoryId}`)
    }
  })
});

export {ProductFeatureCategoryType};
    