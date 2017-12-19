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

const DocumentAttributeInputType = new GraphQLInputObjectType({
  name: 'DocumentAttributeInputType',
  description: 'input type for DocumentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    documentId: {type: GraphQLString}
  })
});

export {DocumentAttributeInputType};
    