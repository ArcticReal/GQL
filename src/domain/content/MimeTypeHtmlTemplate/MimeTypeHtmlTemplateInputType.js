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

const MimeTypeHtmlTemplateInputType = new GraphQLInputObjectType({
  name: 'MimeTypeHtmlTemplateInputType',
  description: 'input type for MimeTypeHtmlTemplate',

  fields: () => ({
    mimeTypeId: {type: GraphQLString},
    templateLocation: {type: GraphQLString}
  })
});

export {MimeTypeHtmlTemplateInputType};
    