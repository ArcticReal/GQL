
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureIactnType} from '../product/ProductFeatureIactnType.js';
import {ProductFeature} from '../product/ProductFeature.js';
import {ProductFeature} from '../product/ProductFeature.js';


const ProductFeatureIactn = new GraphQLObjectType({
  name: 'ProductFeatureIactnType',
  description: 'Type for ProductFeatureIactn in product',

  fields: () => ({
    productId: {type: GraphQLString},
    productFeatureIactnType: {
      type: ProductFeatureIactnTypeType,
      args : {productFeatureIactnTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactn, args, {loaders}) => loaders.ofbizArray.load(`productFeatureIactnTypes/find?=${args.productFeatureIactnTypeId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureIactn, args, {loaders}) => loaders.ofbizArray.load(`productFeatures/find?=${args.productFeatureId}`)
    },
    productFeatureTo: {
      type: ProductFeatureType,
      args : {productFeatureIdTo: {type: GraphQLString}},
      resolve: (productFeatureIactn, args, {loaders}) => loaders.ofbizArray.load(`productFeatures/find?productFeatureId=${args.productFeatureIdTo}`)
    }
  })
});

export {ProductFeatureIactn};
    