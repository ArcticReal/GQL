
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

import {MimeTypeType} from '../../content/MimeType/MimeTypeType.js';


const FileExtensionType = new GraphQLObjectType({
  name: 'FileExtensionType',
  description: 'Type for FileExtension in content',

  fields: () => ({
    mimeType: {
      type: MimeTypeType,
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (fileExtension, args, {loaders}) => loaders.ofbiz.load(`content/mimeTypes/find?mimeTypeId=${fileExtension.mimeTypeId}`)
    },
    fileExtensionId: {type: GraphQLString}
  })
});

export {FileExtensionType};
    