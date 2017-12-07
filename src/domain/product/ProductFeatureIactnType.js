
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureIactnTypeType} from '../product/ProductFeatureIactnTypeType.js';
import {ProductFeatureType} from '../product/ProductFeatureType.js';


const ProductFeatureIactnType = new GraphQLObjectType({
  name: 'ProductFeatureIactnType',
  description: 'Type for ProductFeatureIactn in product',

  fields: () => ({
    productId: {type: GraphQLString},
    productFeatureIactnType: {
      type: ProductFeatureIactnTypeType,
      args : {productFeatureIactnTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactn, args, {loaders}) => loaders.ofbiz.load(`productFeatureIactnTypes/find?productFeatureIactnTypeId=${productFeatureIactn.productFeatureIactnTypeId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureIactn, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${productFeatureIactn.productFeatureId}`)
    },
    productFeatureTo: {
      type: ProductFeatureType,
      args : {productFeatureIdTo: {type: GraphQLString}},
      resolve: (productFeatureIactn, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${productFeatureIactn.productFeatureIdTo}`)
    }
  })
});

export {ProductFeatureIactnType};
    