
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryContentType} from '../product/ProductCategoryContentType.js';


const ProductCategoryContentTypeType = new GraphQLObjectType({
  name: 'ProductCategoryContentTypeType',
  description: 'Type for ProductCategoryContentType in product',

  fields: () => ({
    prodCatContentTypeId: {type: GraphQLString},
    parentType: {
      type: ProductCategoryContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productCategoryContentType, args, {loaders}) => loaders.ofbiz.load(`productCategoryContentTypes/find?prodCatContentTypeId=${productCategoryContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productCategoryContentType: {
      type: new GraphQLList(ProductCategoryContentTypeType),
      args : {prodCatContentTypeId: {type: GraphQLString}},
      resolve: (productCategoryContentType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryContentTypes/find?prodCatContentTypeId=${productCategoryContentType.prodCatContentTypeId}`)
    },
    productCategoryContent: {
      type: new GraphQLList(ProductCategoryContentType),
      args : {prodCatContentTypeId: {type: GraphQLString}},
      resolve: (productCategoryContentType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryContents/find?prodCatContentTypeId=${productCategoryContentType.prodCatContentTypeId}`)
    }
  })
});

export {ProductCategoryContentTypeType};
    