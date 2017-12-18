
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

import {ProductFeatureType} from '../product/ProductFeature.js';
import {DataResourceType} from '../content/DataResource.js';


const ProductFeatureDataResourceType = new GraphQLObjectType({
  name: 'ProductFeatureDataResourceType',
  description: 'Type for ProductFeatureDataResource in product',

  fields: () => ({
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (productFeatureDataResource, args, {loaders}) => loaders.ofbiz.load(`content/dataResources/find?dataResourceId=${productFeatureDataResource.dataResourceId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureDataResource, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${productFeatureDataResource.productFeatureId}`)
    }
  })
});

export {ProductFeatureDataResourceType};
    




const ProductFeatureDataResourceInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureDataResourceInputType',
  description: 'input type for ProductFeatureDataResource',

  fields: () => ({
    dataResourceId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString}
  })
});

export {ProductFeatureDataResourceInputType};
    