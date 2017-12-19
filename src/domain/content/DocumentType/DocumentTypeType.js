
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
import {DocumentTypeAttrType} from '../../content/DocumentTypeAttr/DocumentTypeAttrType.js';


const DocumentTypeType = new GraphQLObjectType({
  name: 'DocumentTypeType',
  description: 'Type for DocumentType in content',

  fields: () => ({
    parentType: {
      type: DocumentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (documentType, args, {loaders}) => loaders.ofbiz.load(`content/document/documentTypes/find?documentTypeId=${documentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    documentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    documents: {
      type: new GraphQLList(DocumentType),
      args : {},
      resolve: (documentType, args, {loaders}) => loaders.ofbizArray.load(`content/documents/find?documentTypeId=${documentType.documentTypeId}`)
    },
    documentTypes: {
      type: new GraphQLList(DocumentTypeType),
      args : {},
      resolve: (documentType, args, {loaders}) => loaders.ofbizArray.load(`content/document/documentTypes/find?documentTypeId=${documentType.documentTypeId}`)
    },
    documentTypeAttrs: {
      type: new GraphQLList(DocumentTypeAttrType),
      args : {},
      resolve: (documentType, args, {loaders}) => loaders.ofbizArray.load(`content/document/documentTypeAttrs/find?documentTypeId=${documentType.documentTypeId}`)
    }
  })
});

export {DocumentTypeType};
    