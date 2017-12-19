
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

import {ShipmentPackageType} from '../../shipment/ShipmentPackage/ShipmentPackageType.js';
import {DocumentType} from '../../content/Document/DocumentType.js';


const ShippingDocumentType = new GraphQLObjectType({
  name: 'ShippingDocumentType',
  description: 'Type for ShippingDocument in shipment',

  fields: () => ({
    shipment: {
      type: ShipmentPackageType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shippingDocument, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentPackages/find?shipmentId=${shippingDocument.shipmentId}`)
    },
    description: {type: GraphQLString},
    document: {
      type: DocumentType,
      args : {documentId: {type: GraphQLString}},
      resolve: (shippingDocument, args, {loaders}) => loaders.ofbiz.load(`content/documents/find?documentId=${shippingDocument.documentId}`)
    },
    shipmentPackageSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShippingDocumentType};
    