
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


const ProductFeatureTypeType = new GraphQLObjectType({
  name: 'ProductFeatureTypeType',
  description: 'Type for ProductFeatureType in product',

  fields: () => ({
    productFeatureTypeId: {type: GraphQLString},
    parentType: {
      type: ProductFeatureTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productFeatureType, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatureTypes/find?productFeatureTypeId=${productFeatureType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productFeatures: {
      type: new GraphQLList(ProductFeatureType),
      args : {},
      resolve: (productFeatureType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatures/find?productFeatureTypeId=${productFeatureType.productFeatureTypeId}`)
    },
    productFeatureTypes: {
      type: new GraphQLList(ProductFeatureTypeType),
      args : {},
      resolve: (productFeatureType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureTypes/find?productFeatureTypeId=${productFeatureType.productFeatureTypeId}`)
    }
  })
});

export {ProductFeatureTypeType};
    




const ProductFeatureTypeInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureTypeInputType',
  description: 'input type for ProductFeatureType in product',

  fields: () => ({
    productFeatureTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {ProductFeatureTypeInputType};
    