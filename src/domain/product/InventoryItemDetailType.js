
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemType} from '../product/InventoryItemType.js';
import {PhysicalInventoryType} from '../product/PhysicalInventoryType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaintType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';
import {ItemIssuanceType} from '../shipment/ItemIssuanceType.js';


const InventoryItemDetailType = new GraphQLObjectType({
  name: 'InventoryItemDetailType',
  description: 'Type for InventoryItemDetail in product',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${inventoryItemDetail.workEffortId}`)
    },
    orderId: {type: GraphQLString},
    description: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    inventoryItemDetailSeqId: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${inventoryItemDetail.inventoryItemId}`)
    },
    accountingQuantityDiff: {type: GraphQLFloat},
    physicalInventory: {
      type: PhysicalInventoryType,
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbiz.load(`physicalInventorys/find?physicalInventoryId=${inventoryItemDetail.physicalInventoryId}`)
    },
    availableToPromiseDiff: {type: GraphQLFloat},
    shipmentId: {type: GraphQLString},
    itemIssuance: {
      type: ItemIssuanceType,
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbiz.load(`itemIssuances/find?itemIssuanceId=${inventoryItemDetail.itemIssuanceId}`)
    },
    unitCost: {type: GraphQLFloat},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetMaintType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbiz.load(`fixedAssetMaints/find?fixedAssetId=${inventoryItemDetail.fixedAssetId}`)
    },
    reasonEnumId: {type: GraphQLString},
    receipt: {
      type: ShipmentReceiptType,
      args : {receiptId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbiz.load(`shipmentReceipts/find?receiptId=${inventoryItemDetail.receiptId}`)
    },
    effectiveDate: {type: GraphQLString},
    quantityOnHandDiff: {type: GraphQLFloat}
  })
});

export {InventoryItemDetailType};
    