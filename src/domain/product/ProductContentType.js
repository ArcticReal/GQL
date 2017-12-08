
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

import {ProductPromoContentType} from '../product/ProductPromoContent.js';
import {ProductContentType} from '../product/ProductContent.js';


const ProductContentTypeType = new GraphQLObjectType({
  name: 'ProductContentTypeType',
  description: 'Type for ProductContentType in product',

  fields: () => ({
    parentType: {
      type: ProductContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productContentType, args, {loaders}) => loaders.ofbiz.load(`productContentTypes/find?productContentTypeId=${productContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productContentTypeId: {type: GraphQLString},
    productContents: {
      type: new GraphQLList(ProductContentType),
      args : {productContentTypeId: {type: GraphQLString}},
      resolve: (productContentType, args, {loaders}) => loaders.ofbizArray.load(`productContents/find?productContentTypeId=${productContentType.productContentTypeId}`)
    },
    productContentTypes: {
      type: new GraphQLList(ProductContentTypeType),
      args : {productContentTypeId: {type: GraphQLString}},
      resolve: (productContentType, args, {loaders}) => loaders.ofbizArray.load(`productContentTypes/find?productContentTypeId=${productContentType.productContentTypeId}`)
    },
    productPromoContents: {
      type: new GraphQLList(ProductPromoContentType),
      args : {productContentTypeId: {type: GraphQLString}},
      resolve: (productContentType, args, {loaders}) => loaders.ofbizArray.load(`productPromoContents/find?productContentTypeId=${productContentType.productContentTypeId}`)
    }
  })
});

export {ProductContentTypeType};
    




const ProductContentTypeInputType = new GraphQLInputObjectType({
  name: 'ProductContentTypeInputType',
  description: 'input type for ProductContentType in product',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productContentTypeId: {type: GraphQLString}
  })
});

export {ProductContentTypeInputType};
    