
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentPackageRouteSegType} from '../shipment/ShipmentPackageRouteSegType.js';
import {ShippingDocumentType} from '../shipment/ShippingDocumentType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {ShipmentPackageContentType} from '../shipment/ShipmentPackageContentType.js';
import {ShipmentBoxTypeType} from '../shipment/ShipmentBoxTypeType.js';


const ShipmentPackageType = new GraphQLObjectType({
  name: 'ShipmentPackageType',
  description: 'Type for ShipmentPackage in shipment',

  fields: () => ({
    boxLength: {type: GraphQLFloat},
    dateCreated: {type: GraphQLString},
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbiz.load(`shipments/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    dimensionUomId: {type: GraphQLString},
    insuredValue: {type: GraphQLFloat},
    weight: {type: GraphQLFloat},
    weightUomId: {type: GraphQLString},
    shipmentPackageSeqId: {type: GraphQLString},
    boxHeight: {type: GraphQLFloat},
    boxWidth: {type: GraphQLFloat},
    shipmentBoxType: {
      type: ShipmentBoxTypeType,
      args : {shipmentBoxTypeId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbiz.load(`shipmentBoxTypes/find?shipmentBoxTypeId=${shipmentPackage.shipmentBoxTypeId}`)
    },
    shippingDocument: {
      type: new GraphQLList(ShippingDocumentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shippingDocuments/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    shipmentPackageRouteSeg: {
      type: new GraphQLList(ShipmentPackageRouteSegType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackageRouteSegs/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    shipmentReceipt: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    shipmentPackageContent: {
      type: new GraphQLList(ShipmentPackageContentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackageContents/find?shipmentId=${shipmentPackage.shipmentId}`)
    }
  })
});

export {ShipmentPackageType};
    