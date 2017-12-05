
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {DataResource} from '../product/DataResource.js';
import {ProductFeature} from '../product/ProductFeature.js';


const ProductFeatureDataResource = new GraphQLObjectType({
  name: 'ProductFeatureDataResourceType',
  description: 'Type for ProductFeatureDataResource in product',

  fields: () => ({
    dataResource: {
      type: DataResourceType,
      args : {dataResourceId: {type: GraphQLString}},
      resolve: (productFeatureDataResource, args, {loaders}) => loaders.ofbizArray.load(`dataResources/find?=${args.dataResourceId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureDataResource, args, {loaders}) => loaders.ofbizArray.load(`productFeatures/find?=${args.productFeatureId}`)
    }
  })
});

export {ProductFeatureDataResource};
    