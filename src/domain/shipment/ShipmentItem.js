
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

import {ReturnItemShipmentType} from '../order/ReturnItemShipment.js';
import {ShippingDocumentType} from '../shipment/ShippingDocument.js';
import {ProductType} from '../product/Product.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {ShipmentItemFeatureType} from '../shipment/ShipmentItemFeature.js';
import {ShipmentPackageContentType} from '../shipment/ShipmentPackageContent.js';
import {ItemIssuanceType} from '../shipment/ItemIssuance.js';
import {ShipmentItemBillingType} from '../shipment/ShipmentItemBilling.js';


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
    shipmentItemFeatures: {
      type: new GraphQLList(ShipmentItemFeatureType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentItemFeatures/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shipmentItemBillings: {
      type: new GraphQLList(ShipmentItemBillingType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentItemBillings/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shipmentPackageContents: {
      type: new GraphQLList(ShipmentPackageContentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentPackageContents/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    returnItemShipments: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`returnItemShipments/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shippingDocuments: {
      type: new GraphQLList(ShippingDocumentType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shippingDocuments/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    itemIssuances: {
      type: new GraphQLList(ItemIssuanceType),
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?shipmentId=${shipmentItem.shipmentId}`)
    }
  })
});

export {ShipmentItemType};
    




const ShipmentItemInputType = new GraphQLInputObjectType({
  name: 'ShipmentItemInputType',
  description: 'input type for ShipmentItem in shipment',

  fields: () => ({
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    shipmentContentDescription: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString}
  })
});

export {ShipmentItemInputType};
    