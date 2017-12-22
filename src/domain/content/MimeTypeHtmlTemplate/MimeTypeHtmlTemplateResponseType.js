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

const MimeTypeHtmlTemplateResponseType = new GraphQLObjectType({
  name: 'MimeTypeHtmlTemplateResponseType',
  description: 'response type for MimeTypeHtmlTemplate',

  fields: () => ({
    mimeTypeId: {type: GraphQLString},
    templateLocation: {type: GraphQLString}
  })
});

export {MimeTypeHtmlTemplateResponseType};
    