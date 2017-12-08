
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
    productFeatureAppls: {
      type: new GraphQLList(ProductFeatureApplType),
      args : {productFeatureApplTypeId: {type: GraphQLString}},
      resolve: (productFeatureApplType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureAppls/find?productFeatureApplTypeId=${productFeatureApplType.productFeatureApplTypeId}`)
    },
    productFeatureApplTypes: {
      type: new GraphQLList(ProductFeatureApplTypeType),
      args : {productFeatureApplTypeId: {type: GraphQLString}},
      resolve: (productFeatureApplType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplTypes/find?productFeatureApplTypeId=${productFeatureApplType.productFeatureApplTypeId}`)
    }
  })
});

export {ProductFeatureApplTypeType};
    




const ProductFeatureApplTypeInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureApplTypeInputType',
  description: 'input type for ProductFeatureApplType in product',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    productFeatureApplTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductFeatureApplTypeInputType};
    