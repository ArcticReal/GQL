
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {ProductFeature} from '../product/ProductFeature.js';
import {ProductFeatureApplType} from '../product/ProductFeatureApplType.js';


const ProductFeatureAppl = new GraphQLObjectType({
  name: 'ProductFeatureApplType',
  description: 'Type for ProductFeatureAppl in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    recurringAmount: {type: GraphQLFloat},
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbizArray.load(`productFeatures/find?=${args.productFeatureId}`)
    },
    productFeatureApplType: {
      type: ProductFeatureApplTypeType,
      args : {productFeatureApplTypeId: {type: GraphQLString}},
      resolve: (productFeatureAppl, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplTypes/find?=${args.productFeatureApplTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureAppl};
    