
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
import {ProductFeatureGroup} from '../product/ProductFeatureGroup.js';


const ProductFeatureCatGrpAppl = new GraphQLObjectType({
  name: 'ProductFeatureCatGrpApplType',
  description: 'Type for ProductFeatureCatGrpAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productFeatureCatGrpAppl, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    productFeatureGroup: {
      type: ProductFeatureGroupType,
      args : {productFeatureGroupId: {type: GraphQLString}},
      resolve: (productFeatureCatGrpAppl, args, {loaders}) => loaders.ofbizArray.load(`productFeatureGroups/find?=${args.productFeatureGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCatGrpAppl};
    