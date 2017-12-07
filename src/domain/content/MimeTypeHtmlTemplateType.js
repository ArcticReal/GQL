
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {MimeTypeType} from '../content/MimeTypeType.js';


const MimeTypeHtmlTemplateType = new GraphQLObjectType({
  name: 'MimeTypeHtmlTemplateType',
  description: 'Type for MimeTypeHtmlTemplate in content',

  fields: () => ({
    mimeType: {
      type: MimeTypeType,
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (mimeTypeHtmlTemplate, args, {loaders}) => loaders.ofbiz.load(`mimeTypes/find?mimeTypeId=${mimeTypeHtmlTemplate.mimeTypeId}`)
    },
    templateLocation: {type: GraphQLString}
  })
});

export {MimeTypeHtmlTemplateType};
    