
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
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbiz.load(`/shipments/find?shipmentId=${shipmentPackage.shipmentId}`)
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
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentBoxTypes/find?shipmentBoxTypeId=${shipmentPackage.shipmentBoxTypeId}`)
    },
    shippingDocuments: {
      type: new GraphQLList(ShippingDocumentType),
      args : {},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipment/shippingDocuments/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    shipmentPackageRouteSegs: {
      type: new GraphQLList(ShipmentPackageRouteSegType),
      args : {},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentPackageRouteSegs/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentReceipts/find?shipmentId=${shipmentPackage.shipmentId}`)
    },
    shipmentPackageContents: {
      type: new GraphQLList(ShipmentPackageContentType),
      args : {},
      resolve: (shipmentPackage, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentPackageContents/find?shipmentId=${shipmentPackage.shipmentId}`)
    }
  })
});

export {ShipmentPackageType};
    




const ShipmentPackageInputType = new GraphQLInputObjectType({
  name: 'ShipmentPackageInputType',
  description: 'input type for ShipmentPackage',

  fields: () => ({
    boxHeight: {type: GraphQLFloat},
    boxLength: {type: GraphQLFloat},
    boxWidth: {type: GraphQLFloat},
    dateCreated: {type: GraphQLString},
    dimensionUomId: {type: GraphQLString},
    insuredValue: {type: GraphQLFloat},
    shipmentBoxTypeId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentPackageSeqId: {type: GraphQLString},
    weight: {type: GraphQLFloat},
    weightUomId: {type: GraphQLString}
  })
});

export {ShipmentPackageInputType};
    