
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

import {ProductFeatureGroupType} from '../product/ProductFeatureGroup.js';
import {ProductCategoryType} from '../product/ProductCategory.js';


const ProductFeatureCatGrpApplType = new GraphQLObjectType({
  name: 'ProductFeatureCatGrpApplType',
  description: 'Type for ProductFeatureCatGrpAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCatGrpAppl, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${productFeatureCatGrpAppl.productCategoryId}`)
    },
    productFeatureGroup: {
      type: ProductFeatureGroupType,
      args : {productFeatureGroupId: {type: GraphQLString}},
      resolve: (productFeatureCatGrpAppl, args, {loaders}) => loaders.ofbiz.load(`productFeatureGroups/find?productFeatureGroupId=${productFeatureCatGrpAppl.productFeatureGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCatGrpApplType};
    




const ProductFeatureCatGrpApplInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureCatGrpApplInputType',
  description: 'input type for ProductFeatureCatGrpAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCatGrpApplInputType};
    