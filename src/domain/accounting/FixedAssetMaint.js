
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

import {FixedAssetMaintMeterType} from '../accounting/FixedAssetMaintMeter.js';
import {FixedAssetMeterType} from '../accounting/FixedAssetMeter.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {ProductMaintTypeType} from '../product/ProductMaintType.js';
import {ProductMeterTypeType} from '../product/ProductMeterType.js';
import {InventoryItemDetailType} from '../product/InventoryItemDetail.js';
import {ItemIssuanceType} from '../shipment/ItemIssuance.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';


const FixedAssetMaintType = new GraphQLObjectType({
  name: 'FixedAssetMaintType',
  description: 'Type for FixedAssetMaint in accounting',

  fields: () => ({
    intervalUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    purchaseOrder: {
      type: OrderHeaderType,
      args : {purchaseOrderId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${fixedAssetMaint.purchaseOrderId}`)
    },
    scheduleWorkEffort: {
      type: WorkEffortType,
      args : {scheduleWorkEffortId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${fixedAssetMaint.scheduleWorkEffortId}`)
    },
    intervalQuantity: {type: GraphQLFloat},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    maintHistSeqId: {type: GraphQLString},
    productMaintType: {
      type: ProductMaintTypeType,
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`productMaintTypes/find?productMaintTypeId=${fixedAssetMaint.productMaintTypeId}`)
    },
    intervalMeterType: {
      type: ProductMeterTypeType,
      args : {intervalMeterTypeId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`productMeterTypes/find?productMeterTypeId=${fixedAssetMaint.intervalMeterTypeId}`)
    },
    productMaintSeqId: {type: GraphQLString},
    inventoryItemDetails: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemDetails/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    fixedAssetMaintMeters: {
      type: new GraphQLList(FixedAssetMaintMeterType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaintMeters/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    itemIssuances: {
      type: new GraphQLList(ItemIssuanceType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    fixedAssetMeters: {
      type: new GraphQLList(FixedAssetMeterType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMeters/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    }
  })
});

export {FixedAssetMaintType};
    




const FixedAssetMaintInputType = new GraphQLInputObjectType({
  name: 'FixedAssetMaintInputType',
  description: 'input type for FixedAssetMaint in accounting',

  fields: () => ({
    intervalUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    purchaseOrderId: {type: GraphQLString},
    scheduleWorkEffortId: {type: GraphQLString},
    intervalQuantity: {type: GraphQLFloat},
    fixedAssetId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    productMaintTypeId: {type: GraphQLString},
    intervalMeterTypeId: {type: GraphQLString},
    productMaintSeqId: {type: GraphQLString}
  })
});

export {FixedAssetMaintInputType};
    