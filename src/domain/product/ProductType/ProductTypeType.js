
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

import {ProductTypeAttrType} from '../../product/ProductTypeAttr/ProductTypeAttrType.js';
import {ProductType} from '../../product/Product/ProductType.js';


const ProductTypeType = new GraphQLObjectType({
  name: 'ProductTypeType',
  description: 'Type for ProductType in product',

  fields: () => ({
    isPhysical: {type: GraphQLBoolean},
    parentType: {
      type: ProductTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productType, args, {loaders}) => loaders.ofbiz.load(`product/product/productTypes/find?productTypeId=${productType.parentTypeId}`)
    },
    isDigital: {type: GraphQLBoolean},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productTypeId: {type: GraphQLString},
    products: {
      type: new GraphQLList(ProductType),
      args : {},
      resolve: (productType, args, {loaders}) => loaders.ofbizArray.load(`products/find?productTypeId=${productType.productTypeId}`)
    },
    productTypes: {
      type: new GraphQLList(ProductTypeType),
      args : {},
      resolve: (productType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productTypes/find?productTypeId=${productType.productTypeId}`)
    },
    productTypeAttrs: {
      type: new GraphQLList(ProductTypeAttrType),
      args : {},
      resolve: (productType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productTypeAttrs/find?productTypeId=${productType.productTypeId}`)
    }
  })
});

export {ProductTypeType};
    