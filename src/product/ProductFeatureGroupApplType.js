
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeature} from '../product/ProductFeature.js';
import {ProductFeatureGroup} from '../product/ProductFeatureGroup.js';


const ProductFeatureGroupAppl = new GraphQLObjectType({
  name: 'ProductFeatureGroupApplType',
  description: 'Type for ProductFeatureGroupAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureGroupAppl, args, {loaders}) => loaders.ofbizArray.load(`productFeatures/find?=${args.productFeatureId}`)
    },
    productFeatureGroup: {
      type: ProductFeatureGroupType,
      args : {productFeatureGroupId: {type: GraphQLString}},
      resolve: (productFeatureGroupAppl, args, {loaders}) => loaders.ofbizArray.load(`productFeatureGroups/find?=${args.productFeatureGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureGroupAppl};
    