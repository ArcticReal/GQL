
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

import {ProductFeatureApplType} from '../product/ProductFeatureAppl.js';
import {ProductFeatureType} from '../product/ProductFeature.js';


const ProductFeatureApplAttrType = new GraphQLObjectType({
  name: 'ProductFeatureApplAttrType',
  description: 'Type for ProductFeatureApplAttr in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    product: {
      type: ProductFeatureApplType,
      args : {productId: {type: GraphQLString}},
      resolve: (productFeatureApplAttr, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatureAppls/find?productId=${productFeatureApplAttr.productId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureApplAttr, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${productFeatureApplAttr.productFeatureId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {ProductFeatureApplAttrType};
    




const ProductFeatureApplAttrInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureApplAttrInputType',
  description: 'input type for ProductFeatureApplAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductFeatureApplAttrInputType};
    