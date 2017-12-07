
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


const ProductFeatureApplTypeType = new GraphQLObjectType({
  name: 'ProductFeatureApplTypeType',
  description: 'Type for ProductFeatureApplType in product',

  fields: () => ({
    parentType: {
      type: ProductFeatureApplTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productFeatureApplType, args, {loaders}) => loaders.ofbiz.load(`productFeatureApplTypes/find?productFeatureApplTypeId=${productFeatureApplType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    productFeatureApplTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    productFeatureAppl: {
      type: new GraphQLList(ProductFeatureApplType),
      args : {productFeatureApplTypeId: {type: GraphQLString}},
      resolve: (productFeatureApplType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureAppls/find?productFeatureApplTypeId=${productFeatureApplType.productFeatureApplTypeId}`)
    },
    productFeatureApplType: {
      type: new GraphQLList(ProductFeatureApplTypeType),
      args : {productFeatureApplTypeId: {type: GraphQLString}},
      resolve: (productFeatureApplType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplTypes/find?productFeatureApplTypeId=${productFeatureApplType.productFeatureApplTypeId}`)
    }
  })
});

export {ProductFeatureApplTypeType};
    