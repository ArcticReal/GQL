
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureApplType} from '../product/ProductFeatureApplType.js';
import {ProductFeatureType} from '../product/ProductFeatureType.js';


const ProductFeatureApplAttrType = new GraphQLObjectType({
  name: 'ProductFeatureApplAttrType',
  description: 'Type for ProductFeatureApplAttr in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    product: {
      type: ProductFeatureApplType,
      args : {productId: {type: GraphQLString}},
      resolve: (productFeatureApplAttr, args, {loaders}) => loaders.ofbiz.load(`productFeatureAppls/find?productId=${productFeatureApplAttr.productId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureApplAttr, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${productFeatureApplAttr.productFeatureId}`)
    },
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {ProductFeatureApplAttrType};
    