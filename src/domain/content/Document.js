
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

import {ShippingDocumentType} from '../shipment/ShippingDocument.js';
import {DocumentTypeType} from '../content/DocumentType.js';
import {DocumentAttributeType} from '../content/DocumentAttribute.js';


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
      resolve: (document, args, {loaders}) => loaders.ofbiz.load(`content/document/documentTypes/find?documentTypeId=${document.documentTypeId}`)
    },
    documentText: {type: GraphQLString},
    documentId: {type: GraphQLString},
    documentLocation: {type: GraphQLString},
    documentAttributes: {
      type: new GraphQLList(DocumentAttributeType),
      args : {},
      resolve: (document, args, {loaders}) => loaders.ofbizArray.load(`content/document/documentAttributes/find?documentId=${document.documentId}`)
    },
    shippingDocuments: {
      type: new GraphQLList(ShippingDocumentType),
      args : {},
      resolve: (document, args, {loaders}) => loaders.ofbizArray.load(`shipment/shippingDocuments/find?documentId=${document.documentId}`)
    }
  })
});

export {DocumentType};
    




const DocumentInputType = new GraphQLInputObjectType({
  name: 'DocumentInputType',
  description: 'input type for Document in content',

  fields: () => ({
    dateCreated: {type: GraphQLString},
    comments: {type: GraphQLString},
    imageData: {type: GraphQLString/*this was an Object TODO find a solution*/},
    documentTypeId: {type: GraphQLString},
    documentText: {type: GraphQLString},
    documentId: {type: GraphQLString},
    documentLocation: {type: GraphQLString}
  })
});

export {DocumentInputType};
    