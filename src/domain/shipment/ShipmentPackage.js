
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

import {ShipmentPackageRouteSegType} from '../shipment/ShipmentPackageRouteSeg.js';
import {ShippingDocumentType} from '../shipment/ShippingDocument.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceipt.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {ShipmentPackageContentType} from '../shipment/ShipmentPackageContent.js';
import {ShipmentBoxTypeType} from '../shipment/ShipmentBoxType.js';


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
    shippingDocuments: {
      type: new GraphQLList(ShippingDocumentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shippingDocuments/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    shipmentPackageRouteSegs: {
      type: new GraphQLList(ShipmentPackageRouteSegType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackageRouteSegs/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    shipmentPackageContents: {
      type: new GraphQLList(ShipmentPackageContentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackageContents/find?shipmentId=${shipmentPackage.shipmentId}`)
    }
  })
});

export {ShipmentPackageType};
    




const ShipmentPackageInputType = new GraphQLInputObjectType({
  name: 'ShipmentPackageInputType',
  description: 'input type for ShipmentPackage in shipment',

  fields: () => ({
    boxLength: {type: GraphQLFloat},
    dateCreated: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    dimensionUomId: {type: GraphQLString},
    insuredValue: {type: GraphQLFloat},
    weight: {type: GraphQLFloat},
    weightUomId: {type: GraphQLString},
    shipmentPackageSeqId: {type: GraphQLString},
    boxHeight: {type: GraphQLFloat},
    boxWidth: {type: GraphQLFloat},
    shipmentBoxTypeId: {type: GraphQLString}
  })
});

export {ShipmentPackageInputType};
    