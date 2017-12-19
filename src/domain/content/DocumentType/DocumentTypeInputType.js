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

const DocumentTypeInputType = new GraphQLInputObjectType({
  name: 'DocumentTypeInputType',
  description: 'input type for DocumentType',

  fields: () => ({
    description: {type: GraphQLString},
    documentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {DocumentTypeInputType};
    