
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductContentType} from '../product/ProductContentType.js';


const ProductContentType = new GraphQLObjectType({
  name: 'ProductContentTypeType',
  description: 'Type for ProductContentType in product',

  fields: () => ({
    parentType: {
      type: ProductContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productContentType, args, {loaders}) => loaders.ofbizArray.load(`productContentTypes/find?productContentTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productContentTypeId: {type: GraphQLString}
  })
});

export {ProductContentType};
    