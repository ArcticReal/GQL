
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureAppl} from '../product/ProductFeatureAppl.js';
import {ProductFeature} from '../product/ProductFeature.js';


const ProductFeatureApplAttr = new GraphQLObjectType({
  name: 'ProductFeatureApplAttrType',
  description: 'Type for ProductFeatureApplAttr in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    product: {
      type: ProductFeatureApplType,
      args : {productId: {type: GraphQLString}},
      resolve: (productFeatureApplAttr, args, {loaders}) => loaders.ofbizArray.load(`productFeatureAppls/find?=${args.productId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureApplAttr, args, {loaders}) => loaders.ofbizArray.load(`productFeatures/find?=${args.productFeatureId}`)
    },
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {ProductFeatureApplAttr};
    