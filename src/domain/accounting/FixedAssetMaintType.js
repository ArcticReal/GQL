
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FixedAssetMaintMeterType} from '../accounting/FixedAssetMaintMeterType.js';
import {FixedAssetMeterType} from '../accounting/FixedAssetMeterType.js';
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {ProductMaintTypeType} from '../product/ProductMaintTypeType.js';
import {ProductMeterTypeType} from '../product/ProductMeterTypeType.js';
import {InventoryItemDetailType} from '../product/InventoryItemDetailType.js';
import {ItemIssuanceType} from '../shipment/ItemIssuanceType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';


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
    inventoryItemDetail: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemDetails/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    fixedAssetMaintMeter: {
      type: new GraphQLList(FixedAssetMaintMeterType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaintMeters/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    itemIssuance: {
      type: new GraphQLList(ItemIssuanceType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    fixedAssetMeter: {
      type: new GraphQLList(FixedAssetMeterType),
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMeters/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    }
  })
});

export {FixedAssetMaintType};
    