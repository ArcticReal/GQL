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

const DocumentTypeAttrResponseType = new GraphQLObjectType({
  name: 'DocumentTypeAttrResponseType',
  description: 'response type for DocumentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    documentTypeId: {type: GraphQLString}
  })
});

export {DocumentTypeAttrResponseType};
    