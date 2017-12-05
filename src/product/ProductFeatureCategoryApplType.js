
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
import {ProductFeatureCategory} from '../product/ProductFeatureCategory.js';


const ProductFeatureCategoryAppl = new GraphQLObjectType({
  name: 'ProductFeatureCategoryApplType',
  description: 'Type for ProductFeatureCategoryAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategoryAppl, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    productFeatureCategory: {
      type: ProductFeatureCategoryType,
      args : {productFeatureCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCategoryAppl, args, {loaders}) => loaders.ofbizArray.load(`productFeatureCategorys/find?=${args.productFeatureCategoryId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCategoryAppl};
    