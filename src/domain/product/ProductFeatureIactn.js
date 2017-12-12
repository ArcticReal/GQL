
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

import {ProductFeatureIactnTypeType} from '../product/ProductFeatureIactnType.js';
import {ProductFeatureType} from '../product/ProductFeature.js';


const ProductFeatureIactnType = new GraphQLObjectType({
  name: 'ProductFeatureIactnType',
  description: 'Type for ProductFeatureIactn in product',

  fields: () => ({
    productId: {type: GraphQLString},
    productFeatureIactnType: {
      type: ProductFeatureIactnTypeType,
      args : {productFeatureIactnTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactn, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatureIactnTypes/find?productFeatureIactnTypeId=${productFeatureIactn.productFeatureIactnTypeId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureIactn, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${productFeatureIactn.productFeatureId}`)
    },
    productFeatureTo: {
      type: ProductFeatureType,
      args : {productFeatureIdTo: {type: GraphQLString}},
      resolve: (productFeatureIactn, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${productFeatureIactn.productFeatureIdTo}`)
    }
  })
});

export {ProductFeatureIactnType};
    




const ProductFeatureIactnInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureIactnInputType',
  description: 'input type for ProductFeatureIactn in product',

  fields: () => ({
    productId: {type: GraphQLString},
    productFeatureIactnTypeId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productFeatureIdTo: {type: GraphQLString}
  })
});

export {ProductFeatureIactnInputType};
    