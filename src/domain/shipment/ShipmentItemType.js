
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnItemShipmentType} from '../order/ReturnItemShipmentType.js';
import {ShippingDocumentType} from '../shipment/ShippingDocumentType.js';
import {ProductType} from '../product/ProductType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {ShipmentItemFeatureType} from '../shipment/ShipmentItemFeatureType.js';
import {ShipmentPackageContentType} from '../shipment/ShipmentPackageContentType.js';
import {ItemIssuanceType} from '../shipment/ItemIssuanceType.js';
import {ShipmentItemBillingType} from '../shipment/ShipmentItemBillingType.js';


const ShipmentItemType = new GraphQLObjectType({
  name: 'ShipmentItemType',
  description: 'Type for ShipmentItem in shipment',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${shipmentItem.productId}`)
    },
    shipmentContentDescription: {type: GraphQLString},
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbiz.load(`shipments/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shipmentItemSeqId: {type: GraphQLString},
    shipmentItemFeature: {
      type: new GraphQLList(ShipmentItemFeatureType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentItemFeatures/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shipmentItemBilling: {
      type: new GraphQLList(ShipmentItemBillingType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentItemBillings/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shipmentPackageContent: {
      type: new GraphQLList(ShipmentPackageContentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackageContents/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    returnItemShipment: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`returnItemShipments/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shippingDocument: {
      type: new GraphQLList(ShippingDocumentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shippingDocuments/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    itemIssuance: {
      type: new GraphQLList(ItemIssuanceType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?shipmentId=${shipmentItem.shipmentId}`)
    }
  })
});

export {ShipmentItemType};
    