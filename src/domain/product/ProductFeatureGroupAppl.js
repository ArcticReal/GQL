
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

import {ProductFeatureGroupType} from '../product/ProductFeatureGroup.js';
import {ProductFeatureType} from '../product/ProductFeature.js';


const ProductFeatureGroupApplType = new GraphQLObjectType({
  name: 'ProductFeatureGroupApplType',
  description: 'Type for ProductFeatureGroupAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureGroupAppl, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${productFeatureGroupAppl.productFeatureId}`)
    },
    productFeatureGroup: {
      type: ProductFeatureGroupType,
      args : {productFeatureGroupId: {type: GraphQLString}},
      resolve: (productFeatureGroupAppl, args, {loaders}) => loaders.ofbiz.load(`productFeatureGroups/find?productFeatureGroupId=${productFeatureGroupAppl.productFeatureGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureGroupApplType};
    




const ProductFeatureGroupApplInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureGroupApplInputType',
  description: 'input type for ProductFeatureGroupAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productFeatureId: {type: GraphQLString},
    productFeatureGroupId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureGroupApplInputType};
    