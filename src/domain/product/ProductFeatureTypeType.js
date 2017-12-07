
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


const ProductFeatureTypeType = new GraphQLObjectType({
  name: 'ProductFeatureTypeType',
  description: 'Type for ProductFeatureType in product',

  fields: () => ({
    productFeatureTypeId: {type: GraphQLString},
    parentType: {
      type: ProductFeatureTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productFeatureType, args, {loaders}) => loaders.ofbiz.load(`productFeatureTypes/find?productFeatureTypeId=${productFeatureType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productFeature: {
      type: new GraphQLList(ProductFeatureType),
      args : {productFeatureTypeId: {type: GraphQLString}},
      resolve: (productFeatureType, args, {loaders}) => loaders.ofbizArray.load(`productFeatures/find?productFeatureTypeId=${productFeatureType.productFeatureTypeId}`)
    },
    productFeatureType: {
      type: new GraphQLList(ProductFeatureTypeType),
      args : {productFeatureTypeId: {type: GraphQLString}},
      resolve: (productFeatureType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureTypes/find?productFeatureTypeId=${productFeatureType.productFeatureTypeId}`)
    }
  })
});

export {ProductFeatureTypeType};
    