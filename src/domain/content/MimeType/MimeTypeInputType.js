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

const MimeTypeInputType = new GraphQLInputObjectType({
  name: 'MimeTypeInputType',
  description: 'input type for MimeType',

  fields: () => ({
    description: {type: GraphQLString},
    mimeTypeId: {type: GraphQLString}
  })
});

export {MimeTypeInputType};
    