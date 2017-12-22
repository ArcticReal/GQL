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

const FileExtensionResponseType = new GraphQLObjectType({
  name: 'FileExtensionResponseType',
  description: 'response type for FileExtension',

  fields: () => ({
    fileExtensionId: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString}
  })
});

export {FileExtensionResponseType};
    