
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureGroupType} from '../product/ProductFeatureGroupType.js';
import {ProductFeatureType} from '../product/ProductFeatureType.js';


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
    