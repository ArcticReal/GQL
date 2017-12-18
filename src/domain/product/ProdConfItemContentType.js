
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

import {ProdConfItemContentType} from '../product/ProdConfItemContent.js';


const ProdConfItemContentTypeType = new GraphQLObjectType({
  name: 'ProdConfItemContentTypeType',
  description: 'Type for ProdConfItemContentType in product',

  fields: () => ({
    confItemContentTypeId: {type: GraphQLString},
    parentType: {
      type: ProdConfItemContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (prodConfItemContentType, args, {loaders}) => loaders.ofbiz.load(`product/prodConfItemContent/prodConfItemContentTypes/find?confItemContentTypeId=${prodConfItemContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    prodConfItemContents: {
      type: new GraphQLList(ProdConfItemContentType),
      args : {},
      resolve: (prodConfItemContentType, args, {loaders}) => loaders.ofbizArray.load(`product/prodConfItemContents/find?confItemContentTypeId=${prodConfItemContentType.confItemContentTypeId}`)
    },
    prodConfItemContentTypes: {
      type: new GraphQLList(ProdConfItemContentTypeType),
      args : {},
      resolve: (prodConfItemContentType, args, {loaders}) => loaders.ofbizArray.load(`product/prodConfItemContent/prodConfItemContentTypes/find?confItemContentTypeId=${prodConfItemContentType.confItemContentTypeId}`)
    }
  })
});

export {ProdConfItemContentTypeType};
    




const ProdConfItemContentTypeInputType = new GraphQLInputObjectType({
  name: 'ProdConfItemContentTypeInputType',
  description: 'input type for ProdConfItemContentType',

  fields: () => ({
    confItemContentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {ProdConfItemContentTypeInputType};
    