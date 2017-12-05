
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffort} from '../product/WorkEffort.js';
import {InventoryItem} from '../product/InventoryItem.js';
import {PhysicalInventory} from '../product/PhysicalInventory.js';
import {ItemIssuance} from '../product/ItemIssuance.js';
import {FixedAssetMaint} from '../product/FixedAssetMaint.js';
import {ShipmentReceipt} from '../product/ShipmentReceipt.js';


const InventoryItemDetail = new GraphQLObjectType({
  name: 'InventoryItemDetailType',
  description: 'Type for InventoryItemDetail in product',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?=${args.workEffortId}`)
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
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?=${args.inventoryItemId}`)
    },
    accountingQuantityDiff: {type: GraphQLFloat},
    physicalInventory: {
      type: PhysicalInventoryType,
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbizArray.load(`physicalInventorys/find?=${args.physicalInventoryId}`)
    },
    availableToPromiseDiff: {type: GraphQLFloat},
    shipmentId: {type: GraphQLString},
    itemIssuance: {
      type: ItemIssuanceType,
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?=${args.itemIssuanceId}`)
    },
    unitCost: {type: GraphQLFloat},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetMaintType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?=${args.fixedAssetId}`)
    },
    reasonEnumId: {type: GraphQLString},
    receipt: {
      type: ShipmentReceiptType,
      args : {receiptId: {type: GraphQLString}},
      resolve: (inventoryItemDetail, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?=${args.receiptId}`)
    },
    effectiveDate: {type: GraphQLString},
    quantityOnHandDiff: {type: GraphQLFloat}
  })
});

export {InventoryItemDetail};
    