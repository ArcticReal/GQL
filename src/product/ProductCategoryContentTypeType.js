
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


const ProductCategoryContentType = new GraphQLObjectType({
  name: 'ProductCategoryContentTypeType',
  description: 'Type for ProductCategoryContentType in product',

  fields: () => ({
    prodCatContentTypeId: {type: GraphQLString},
    parentType: {
      type: ProductCategoryContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productCategoryContentType, args, {loaders}) => loaders.ofbizArray.load(`productCategoryContentTypes/find?prodCatContentTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {ProductCategoryContentType};
    