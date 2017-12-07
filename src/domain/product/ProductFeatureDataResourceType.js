
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureType} from '../product/ProductFeatureType.js';
import {DataResourceType} from '../content/DataResourceType.js';


const ProductFeatureDataResourceType = new GraphQLObjectType({
  name: 'ProductFeatureDataResourceType',
  description: 'Type for ProductFeatureDataResource in product',

  fields: () => ({
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (productFeatureDataResource, args, {loaders}) => loaders.ofbiz.load(`dataResources/find?dataResourceId=${productFeatureDataResource.dataResourceId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureDataResource, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${productFeatureDataResource.productFeatureId}`)
    }
  })
});

export {ProductFeatureDataResourceType};
    