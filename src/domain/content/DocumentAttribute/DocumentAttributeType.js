
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

import {DocumentType} from '../../content/Document/DocumentType.js';


const DocumentAttributeType = new GraphQLObjectType({
  name: 'DocumentAttributeType',
  description: 'Type for DocumentAttribute in content',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    document: {
      type: DocumentType,
      args : {documentId: {type: GraphQLString}},
      resolve: (documentAttribute, args, {loaders}) => loaders.ofbiz.load(`content/documents/find?documentId=${documentAttribute.documentId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {DocumentAttributeType};
    