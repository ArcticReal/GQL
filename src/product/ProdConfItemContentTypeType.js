
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


const ProdConfItemContentType = new GraphQLObjectType({
  name: 'ProdConfItemContentTypeType',
  description: 'Type for ProdConfItemContentType in product',

  fields: () => ({
    confItemContentTypeId: {type: GraphQLString},
    parentType: {
      type: ProdConfItemContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (prodConfItemContentType, args, {loaders}) => loaders.ofbizArray.load(`prodConfItemContentTypes/find?confItemContentTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {ProdConfItemContentType};
    