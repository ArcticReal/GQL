
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
import {ProductFeatureApplTypeType} from '../product/ProductFeatureApplType.js';
import {ProductFeatureApplAttrType} from '../product/ProductFeatureApplAttr.js';
import {ProductType} from '../product/Product.js';


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
    productFeatureApplAttrs: {
      type: new GraphQLList(ProductFeatureApplAttrType),
      args : {productId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplAttrs/find?productId=${productFeatureAppl.productId}`)
    }
  })
});

export {ProductFeatureApplType};
    




const ProductFeatureApplInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureApplInputType',
  description: 'input type for ProductFeatureAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    recurringAmount: {type: GraphQLFloat},
    productFeatureId: {type: GraphQLString},
    productFeatureApplTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureApplInputType};
    