
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShippingDocumentType} from '../shipment/ShippingDocumentType.js';
import {DocumentTypeType} from '../content/DocumentTypeType.js';
import {DocumentAttributeType} from '../content/DocumentAttributeType.js';


const DocumentType = new GraphQLObjectType({
  name: 'DocumentType',
  description: 'Type for Document in content',

  fields: () => ({
    dateCreated: {type: GraphQLString},
    comments: {type: GraphQLString},
    imageData: {type: GraphQLString/*this was an Object TODO find a solution*/},
    documentType: {
      type: DocumentTypeType,
      args : {documentTypeId: {type: GraphQLString}},
      resolve: (document, args, {loaders}) => loaders.ofbiz.load(`documentTypes/find?documentTypeId=${document.documentTypeId}`)
    },
    documentText: {type: GraphQLString},
    documentId: {type: GraphQLString},
    documentLocation: {type: GraphQLString},
    documentAttribute: {
      type: new GraphQLList(DocumentAttributeType),
      args : {documentId: {type: GraphQLString}},
      resolve: (document, args, {loaders}) => loaders.ofbizArray.load(`documentAttributes/find?documentId=${document.documentId}`)
    },
    shippingDocument: {
      type: new GraphQLList(ShippingDocumentType),
      args : {documentId: {type: GraphQLString}},
      resolve: (document, args, {loaders}) => loaders.ofbizArray.load(`shippingDocuments/find?documentId=${document.documentId}`)
    }
  })
});

export {DocumentType};
    