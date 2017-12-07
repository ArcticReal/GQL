
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPromoContentType} from '../product/ProductPromoContentType.js';
import {ProductContentType} from '../product/ProductContentType.js';


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
    productContent: {
      type: new GraphQLList(ProductContentType),
      args : {productContentTypeId: {type: GraphQLString}},
      resolve: (productContentType, args, {loaders}) => loaders.ofbizArray.load(`productContents/find?productContentTypeId=${productContentType.productContentTypeId}`)
    },
    productContentType: {
      type: new GraphQLList(ProductContentTypeType),
      args : {productContentTypeId: {type: GraphQLString}},
      resolve: (productContentType, args, {loaders}) => loaders.ofbizArray.load(`productContentTypes/find?productContentTypeId=${productContentType.productContentTypeId}`)
    },
    productPromoContent: {
      type: new GraphQLList(ProductPromoContentType),
      args : {productContentTypeId: {type: GraphQLString}},
      resolve: (productContentType, args, {loaders}) => loaders.ofbizArray.load(`productPromoContents/find?productContentTypeId=${productContentType.productContentTypeId}`)
    }
  })
});

export {ProductContentTypeType};
    