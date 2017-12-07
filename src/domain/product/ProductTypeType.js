
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductTypeAttrType} from '../product/ProductTypeAttrType.js';
import {ProductType} from '../product/ProductType.js';


const ProductTypeType = new GraphQLObjectType({
  name: 'ProductTypeType',
  description: 'Type for ProductType in product',

  fields: () => ({
    isPhysical: {type: GraphQLBoolean},
    parentType: {
      type: ProductTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productType, args, {loaders}) => loaders.ofbiz.load(`productTypes/find?productTypeId=${productType.parentTypeId}`)
    },
    isDigital: {type: GraphQLBoolean},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productTypeId: {type: GraphQLString},
    product: {
      type: new GraphQLList(ProductType),
      args : {productTypeId: {type: GraphQLString}},
      resolve: (productType, args, {loaders}) => loaders.ofbizArray.load(`products/find?productTypeId=${productType.productTypeId}`)
    },
    productType: {
      type: new GraphQLList(ProductTypeType),
      args : {productTypeId: {type: GraphQLString}},
      resolve: (productType, args, {loaders}) => loaders.ofbizArray.load(`productTypes/find?productTypeId=${productType.productTypeId}`)
    },
    productTypeAttr: {
      type: new GraphQLList(ProductTypeAttrType),
      args : {productTypeId: {type: GraphQLString}},
      resolve: (productType, args, {loaders}) => loaders.ofbizArray.load(`productTypeAttrs/find?productTypeId=${productType.productTypeId}`)
    }
  })
});

export {ProductTypeType};
    