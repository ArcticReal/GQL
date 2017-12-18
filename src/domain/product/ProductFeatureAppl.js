
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
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productFeatureAppl.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    recurringAmount: {type: GraphQLFloat},
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${productFeatureAppl.productFeatureId}`)
    },
    productFeatureApplType: {
      type: ProductFeatureApplTypeType,
      args : {productFeatureApplTypeId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatureApplTypes/find?productFeatureApplTypeId=${productFeatureAppl.productFeatureApplTypeId}`)
    },
    thruDate: {type: GraphQLString},
    productFeatureApplAttrs: {
      type: new GraphQLList(ProductFeatureApplAttrType),
      args : {},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureApplAttrs/find?productId=${productFeatureAppl.productId}`)
    }
  })
});

export {ProductFeatureApplType};
    




const ProductFeatureApplInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureApplInputType',
  description: 'input type for ProductFeatureAppl',

  fields: () => ({
    amount: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    productFeatureApplTypeId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString},
    recurringAmount: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureApplInputType};
    