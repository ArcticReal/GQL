
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureCategoryType} from '../product/ProductFeatureCategoryType.js';
import {ProductCategoryType} from '../product/ProductCategoryType.js';


const ProductFeatureCategoryApplType = new GraphQLObjectType({
  name: 'ProductFeatureCategoryApplType',
  description: 'Type for ProductFeatureCategoryAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategoryAppl, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productFeatureCategoryAppl.productCategoryId}`)
    },
    productFeatureCategory: {
      type: ProductFeatureCategoryType,
      args : {productFeatureCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategoryAppl, args, {loaders}) => loaders.ofbiz.load(`productFeatureCategorys/find?productFeatureCategoryId=${productFeatureCategoryAppl.productFeatureCategoryId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCategoryApplType};
    