
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

import {ProductType} from '../product/Product.js';


const ProductKeywordType = new GraphQLObjectType({
  name: 'ProductKeywordType',
  description: 'Type for ProductKeyword in product',

  fields: () => ({
    relevancyWeight: {type: GraphQLInt},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productKeyword, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productKeyword.productId}`)
    },
    statusId: {type: GraphQLString},
    keywordTypeId: {type: GraphQLString},
    keyword: {type: GraphQLString}
  })
});

export {ProductKeywordType};
    




const ProductKeywordInputType = new GraphQLInputObjectType({
  name: 'ProductKeywordInputType',
  description: 'input type for ProductKeyword in product',

  fields: () => ({
    relevancyWeight: {type: GraphQLInt},
    productId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    keywordTypeId: {type: GraphQLString},
    keyword: {type: GraphQLString}
  })
});

export {ProductKeywordInputType};
    