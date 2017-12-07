
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
import {ProductFeatureApplTypeType} from '../product/ProductFeatureApplTypeType.js';
import {ProductFeatureApplAttrType} from '../product/ProductFeatureApplAttrType.js';
import {ProductType} from '../product/ProductType.js';


const ProductFeatureApplType = new GraphQLObjectType({
  name: 'ProductFeatureApplType',
  description: 'Type for ProductFeatureAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productFeatureAppl.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    recurringAmount: {type: GraphQLFloat},
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${productFeatureAppl.productFeatureId}`)
    },
    productFeatureApplType: {
      type: ProductFeatureApplTypeType,
      args : {productFeatureApplTypeId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbiz.load(`productFeatureApplTypes/find?productFeatureApplTypeId=${productFeatureAppl.productFeatureApplTypeId}`)
    },
    thruDate: {type: GraphQLString},
    productFeatureApplAttr: {
      type: new GraphQLList(ProductFeatureApplAttrType),
      args : {productId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplAttrs/find?productId=${productFeatureAppl.productId}`)
    }
  })
});

export {ProductFeatureApplType};
    