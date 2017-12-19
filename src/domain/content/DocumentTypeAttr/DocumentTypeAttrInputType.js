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

const DocumentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'DocumentTypeAttrInputType',
  description: 'input type for DocumentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    documentTypeId: {type: GraphQLString}
  })
});

export {DocumentTypeAttrInputType};
    