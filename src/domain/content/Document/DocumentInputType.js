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

const DocumentInputType = new GraphQLInputObjectType({
  name: 'DocumentInputType',
  description: 'input type for Document',

  fields: () => ({
    comments: {type: GraphQLString},
    dateCreated: {type: GraphQLString},
    documentId: {type: GraphQLString},
    documentLocation: {type: GraphQLString},
    documentText: {type: GraphQLString},
    documentTypeId: {type: GraphQLString},
    imageData: {type: GraphQLString}
  })
});

export {DocumentInputType};
    