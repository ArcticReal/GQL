
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

import {ProductCategoryContentType} from '../product/ProductCategoryContent.js';


const ProductCategoryContentTypeType = new GraphQLObjectType({
  name: 'ProductCategoryContentTypeType',
  description: 'Type for ProductCategoryContentType in product',

  fields: () => ({
    prodCatContentTypeId: {type: GraphQLString},
    parentType: {
      type: ProductCategoryContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productCategoryContentType, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategoryContentTypes/find?prodCatContentTypeId=${productCategoryContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productCategoryContentTypes: {
      type: new GraphQLList(ProductCategoryContentTypeType),
      args : {},
      resolve: (productCategoryContentType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryContentTypes/find?prodCatContentTypeId=${productCategoryContentType.prodCatContentTypeId}`)
    },
    productCategoryContents: {
      type: new GraphQLList(ProductCategoryContentType),
      args : {},
      resolve: (productCategoryContentType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productCategoryContents/find?prodCatContentTypeId=${productCategoryContentType.prodCatContentTypeId}`)
    }
  })
});

export {ProductCategoryContentTypeType};
    




const ProductCategoryContentTypeInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryContentTypeInputType',
  description: 'input type for ProductCategoryContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    prodCatContentTypeId: {type: GraphQLString}
  })
});

export {ProductCategoryContentTypeInputType};
    