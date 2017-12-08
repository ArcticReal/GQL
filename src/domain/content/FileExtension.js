
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

import {MimeTypeType} from '../content/MimeType.js';


const FileExtensionType = new GraphQLObjectType({
  name: 'FileExtensionType',
  description: 'Type for FileExtension in content',

  fields: () => ({
    mimeType: {
      type: MimeTypeType,
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (fileExtension, args, {loaders}) => loaders.ofbiz.load(`mimeTypes/find?mimeTypeId=${fileExtension.mimeTypeId}`)
    },
    fileExtensionId: {type: GraphQLString}
  })
});

export {FileExtensionType};
    




const FileExtensionInputType = new GraphQLInputObjectType({
  name: 'FileExtensionInputType',
  description: 'input type for FileExtension in content',

  fields: () => ({
    mimeTypeId: {type: GraphQLString},
    fileExtensionId: {type: GraphQLString}
  })
});

export {FileExtensionInputType};
    