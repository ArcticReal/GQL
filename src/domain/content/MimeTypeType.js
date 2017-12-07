
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {FileExtensionType} from '../content/FileExtensionType.js';
import {MimeTypeHtmlTemplateType} from '../content/MimeTypeHtmlTemplateType.js';


const MimeTypeType = new GraphQLObjectType({
  name: 'MimeTypeType',
  description: 'Type for MimeType in content',

  fields: () => ({
    mimeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    communicationEvent: {
      type: new GraphQLList(CommunicationEventType),
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (mimeType, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?mimeTypeId=${mimeType.mimeTypeId}`)
    },
    fileExtension: {
      type: new GraphQLList(FileExtensionType),
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (mimeType, args, {loaders}) => loaders.ofbizArray.load(`fileExtensions/find?mimeTypeId=${mimeType.mimeTypeId}`)
    },
    mimeTypeHtmlTemplate: {
      type: new GraphQLList(MimeTypeHtmlTemplateType),
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (mimeType, args, {loaders}) => loaders.ofbizArray.load(`mimeTypeHtmlTemplates/find?mimeTypeId=${mimeType.mimeTypeId}`)
    }
  })
});

export {MimeTypeType};
    