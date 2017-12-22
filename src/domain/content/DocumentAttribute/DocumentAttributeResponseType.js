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

const DocumentAttributeResponseType = new GraphQLObjectType({
  name: 'DocumentAttributeResponseType',
  description: 'response type for DocumentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    documentId: {type: GraphQLString}
  })
});

export {DocumentAttributeResponseType};
    