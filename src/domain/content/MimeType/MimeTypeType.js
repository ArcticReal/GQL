
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

import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';
import {FileExtensionType} from '../../content/FileExtension/FileExtensionType.js';
import {MimeTypeHtmlTemplateType} from '../../content/MimeTypeHtmlTemplate/MimeTypeHtmlTemplateType.js';


const MimeTypeType = new GraphQLObjectType({
  name: 'MimeTypeType',
  description: 'Type for MimeType in content',

  fields: () => ({
    mimeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {},
      resolve: (mimeType, args, {loaders}) => loaders.ofbizArray.load(`party/communicationEvents/find?mimeTypeId=${mimeType.mimeTypeId}`)
    },
    fileExtensions: {
      type: new GraphQLList(FileExtensionType),
      args : {},
      resolve: (mimeType, args, {loaders}) => loaders.ofbizArray.load(`content/fileExtensions/find?mimeTypeId=${mimeType.mimeTypeId}`)
    },
    mimeTypeHtmlTemplates: {
      type: new GraphQLList(MimeTypeHtmlTemplateType),
      args : {},
      resolve: (mimeType, args, {loaders}) => loaders.ofbizArray.load(`content/mimeType/mimeTypeHtmlTemplates/find?mimeTypeId=${mimeType.mimeTypeId}`)
    }
  })
});

export {MimeTypeType};
    