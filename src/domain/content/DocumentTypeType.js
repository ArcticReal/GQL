
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {DocumentType} from '../content/DocumentType.js';
import {DocumentTypeAttrType} from '../content/DocumentTypeAttrType.js';


const DocumentTypeType = new GraphQLObjectType({
  name: 'DocumentTypeType',
  description: 'Type for DocumentType in content',

  fields: () => ({
    parentType: {
      type: DocumentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (documentType, args, {loaders}) => loaders.ofbiz.load(`documentTypes/find?documentTypeId=${documentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    documentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    document: {
      type: new GraphQLList(DocumentType),
      args : {documentTypeId: {type: GraphQLString}},
      resolve: (documentType, args, {loaders}) => loaders.ofbizArray.load(`documents/find?documentTypeId=${documentType.documentTypeId}`)
    },
    documentType: {
      type: new GraphQLList(DocumentTypeType),
      args : {documentTypeId: {type: GraphQLString}},
      resolve: (documentType, args, {loaders}) => loaders.ofbizArray.load(`documentTypes/find?documentTypeId=${documentType.documentTypeId}`)
    },
    documentTypeAttr: {
      type: new GraphQLList(DocumentTypeAttrType),
      args : {documentTypeId: {type: GraphQLString}},
      resolve: (documentType, args, {loaders}) => loaders.ofbizArray.load(`documentTypeAttrs/find?documentTypeId=${documentType.documentTypeId}`)
    }
  })
});

export {DocumentTypeType};
    