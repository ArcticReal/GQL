
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

import {DocumentTypeType} from '../../content/DocumentType/DocumentTypeType.js';


const DocumentTypeAttrType = new GraphQLObjectType({
  name: 'DocumentTypeAttrType',
  description: 'Type for DocumentTypeAttr in content',

  fields: () => ({
    documentType: {
      type: DocumentTypeType,
      args : {documentTypeId: {type: GraphQLString}},
      resolve: (documentTypeAttr, args, {loaders}) => loaders.ofbiz.load(`content/document/documentTypes/find?documentTypeId=${documentTypeAttr.documentTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {DocumentTypeAttrType};
    