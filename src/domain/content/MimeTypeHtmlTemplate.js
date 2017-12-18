
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


const MimeTypeHtmlTemplateType = new GraphQLObjectType({
  name: 'MimeTypeHtmlTemplateType',
  description: 'Type for MimeTypeHtmlTemplate in content',

  fields: () => ({
    mimeType: {
      type: MimeTypeType,
      args : {mimeTypeId: {type: GraphQLString}},
      resolve: (mimeTypeHtmlTemplate, args, {loaders}) => loaders.ofbiz.load(`content/mimeTypes/find?mimeTypeId=${mimeTypeHtmlTemplate.mimeTypeId}`)
    },
    templateLocation: {type: GraphQLString}
  })
});

export {MimeTypeHtmlTemplateType};
    




const MimeTypeHtmlTemplateInputType = new GraphQLInputObjectType({
  name: 'MimeTypeHtmlTemplateInputType',
  description: 'input type for MimeTypeHtmlTemplate',

  fields: () => ({
    mimeTypeId: {type: GraphQLString},
    templateLocation: {type: GraphQLString}
  })
});

export {MimeTypeHtmlTemplateInputType};
    