
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProdConfItemContentType} from '../product/ProdConfItemContentType.js';


const ProdConfItemContentTypeType = new GraphQLObjectType({
  name: 'ProdConfItemContentTypeType',
  description: 'Type for ProdConfItemContentType in product',

  fields: () => ({
    confItemContentTypeId: {type: GraphQLString},
    parentType: {
      type: ProdConfItemContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (prodConfItemContentType, args, {loaders}) => loaders.ofbiz.load(`prodConfItemContentTypes/find?confItemContentTypeId=${prodConfItemContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    prodConfItemContent: {
      type: new GraphQLList(ProdConfItemContentType),
      args : {confItemContentTypeId: {type: GraphQLString}},
      resolve: (prodConfItemContentType, args, {loaders}) => loaders.ofbizArray.load(`prodConfItemContents/find?confItemContentTypeId=${prodConfItemContentType.confItemContentTypeId}`)
    },
    prodConfItemContentType: {
      type: new GraphQLList(ProdConfItemContentTypeType),
      args : {confItemContentTypeId: {type: GraphQLString}},
      resolve: (prodConfItemContentType, args, {loaders}) => loaders.ofbizArray.load(`prodConfItemContentTypes/find?confItemContentTypeId=${prodConfItemContentType.confItemContentTypeId}`)
    }
  })
});

export {ProdConfItemContentTypeType};
    