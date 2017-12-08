
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

import {DocumentType} from '../content/Document.js';
import {DocumentTypeAttrType} from '../content/DocumentTypeAttr.js';


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
    documents: {
      type: new GraphQLList(DocumentType),
      args : {documentTypeId: {type: GraphQLString}},
      resolve: (documentType, args, {loaders}) => loaders.ofbizArray.load(`documents/find?documentTypeId=${documentType.documentTypeId}`)
    },
    documentTypes: {
      type: new GraphQLList(DocumentTypeType),
      args : {documentTypeId: {type: GraphQLString}},
      resolve: (documentType, args, {loaders}) => loaders.ofbizArray.load(`documentTypes/find?documentTypeId=${documentType.documentTypeId}`)
    },
    documentTypeAttrs: {
      type: new GraphQLList(DocumentTypeAttrType),
      args : {documentTypeId: {type: GraphQLString}},
      resolve: (documentType, args, {loaders}) => loaders.ofbizArray.load(`documentTypeAttrs/find?documentTypeId=${documentType.documentTypeId}`)
    }
  })
});

export {DocumentTypeType};
    




const DocumentTypeInputType = new GraphQLInputObjectType({
  name: 'DocumentTypeInputType',
  description: 'input type for DocumentType in content',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    documentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DocumentTypeInputType};
    