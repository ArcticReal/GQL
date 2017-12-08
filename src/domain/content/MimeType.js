
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

import {CommunicationEventType} from '../party/CommunicationEvent.js';
import {FileExtensionType} from '../content/FileExtension.js';
import {MimeTypeHtmlTemplateType} from '../content/MimeTypeHtmlTemplate.js';


const MimeTypeType = new GraphQLObjectType({
  name: 'MimeTypeType',
  description: 'Type for MimeType in content',

  fields: () => ({
    mimeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    communicationEvents: {
      type: new GraphQLList(CommunicationEventType),
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (mimeType, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?mimeTypeId=${mimeType.mimeTypeId}`)
    },
    fileExtensions: {
      type: new GraphQLList(FileExtensionType),
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (mimeType, args, {loaders}) => loaders.ofbizArray.load(`fileExtensions/find?mimeTypeId=${mimeType.mimeTypeId}`)
    },
    mimeTypeHtmlTemplates: {
      type: new GraphQLList(MimeTypeHtmlTemplateType),
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (mimeType, args, {loaders}) => loaders.ofbizArray.load(`mimeTypeHtmlTemplates/find?mimeTypeId=${mimeType.mimeTypeId}`)
    }
  })
});

export {MimeTypeType};
    




const MimeTypeInputType = new GraphQLInputObjectType({
  name: 'MimeTypeInputType',
  description: 'input type for MimeType in content',

  fields: () => ({
    mimeTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {MimeTypeInputType};
    