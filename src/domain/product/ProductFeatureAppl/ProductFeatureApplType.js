
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

import {ProductFeatureType} from '../../product/ProductFeature/ProductFeatureType.js';
import {ProductFeatureApplTypeType} from '../../product/ProductFeatureApplType/ProductFeatureApplTypeType.js';
import {ProductFeatureApplAttrType} from '../../product/ProductFeatureApplAttr/ProductFeatureApplAttrType.js';
import {ProductType} from '../../product/Product/ProductType.js';


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
    