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

const MimeTypeResponseType = new GraphQLObjectType({
  name: 'MimeTypeResponseType',
  description: 'response type for MimeType',

  fields: () => ({
    description: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString}
  })
});

export {MimeTypeResponseType};
    