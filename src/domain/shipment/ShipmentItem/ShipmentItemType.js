
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

import {ReturnItemShipmentType} from '../../order/ReturnItemShipment/ReturnItemShipmentType.js';
import {ShippingDocumentType} from '../../shipment/ShippingDocument/ShippingDocumentType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {ShipmentType} from '../../shipment/Shipment/ShipmentType.js';
import {ShipmentItemFeatureType} from '../../shipment/ShipmentItemFeature/ShipmentItemFeatureType.js';
import {ShipmentPackageContentType} from '../../shipment/ShipmentPackageContent/ShipmentPackageContentType.js';
import {ItemIssuanceType} from '../../shipment/ItemIssuance/ItemIssuanceType.js';
import {ShipmentItemBillingType} from '../../shipment/ShipmentItemBilling/ShipmentItemBillingType.js';


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
      args : {},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentItemFeatures/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shipmentItemBillings: {
      type: new GraphQLList(ShipmentItemBillingType),
      args : {},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentItemBillings/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shipmentPackageContents: {
      type: new GraphQLList(ShipmentPackageContentType),
      args : {},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentPackageContents/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    returnItemShipments: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemShipments/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    shippingDocuments: {
      type: new GraphQLList(ShippingDocumentType),
      args : {},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/shippingDocuments/find?shipmentId=${shipmentItem.shipmentId}`)
    },
    itemIssuances: {
      type: new GraphQLList(ItemIssuanceType),
      args : {},
      resolve: (shipmentItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/itemIssuances/find?shipmentId=${shipmentItem.shipmentId}`)
    }
  })
});

export {ShipmentItemType};
    