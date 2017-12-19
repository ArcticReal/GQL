
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

import {ProductFeatureGroupType} from '../../product/ProductFeatureGroup/ProductFeatureGroupType.js';
import {ProductCategoryType} from '../../product/ProductCategory/ProductCategoryType.js';


const ProductFeatureCatGrpApplType = new GraphQLObjectType({
  name: 'ProductFeatureCatGrpApplType',
  description: 'Type for ProductFeatureCatGrpAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCatGrpAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${productFeatureCatGrpAppl.productCategoryId}`)
    },
    productFeatureGroup: {
      type: ProductFeatureGroupType,
      args : {productFeatureGroupId: {type: GraphQLString}},
      resolve: (productFeatureCatGrpAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatureGroups/find?productFeatureGroupId=${productFeatureCatGrpAppl.productFeatureGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCatGrpApplType};
    