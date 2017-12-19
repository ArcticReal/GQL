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

const FileExtensionInputType = new GraphQLInputObjectType({
  name: 'FileExtensionInputType',
  description: 'input type for FileExtension',

  fields: () => ({
    fileExtensionId: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString}
  })
});

export {FileExtensionInputType};
    