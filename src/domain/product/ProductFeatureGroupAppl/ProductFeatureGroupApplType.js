
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

import {ProductFeatureGroupType} from '../../product/ProductFeatureGroup/ProductFeatureGroupType.js';
import {ProductFeatureType} from '../../product/ProductFeature/ProductFeatureType.js';


const ProductFeatureGroupApplType = new GraphQLObjectType({
  name: 'ProductFeatureGroupApplType',
  description: 'Type for ProductFeatureGroupAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureGroupAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${productFeatureGroupAppl.productFeatureId}`)
    },
    productFeatureGroup: {
      type: ProductFeatureGroupType,
      args : {productFeatureGroupId: {type: GraphQLString}},
      resolve: (productFeatureGroupAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatureGroups/find?productFeatureGroupId=${productFeatureGroupAppl.productFeatureGroupId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureGroupApplType};
    