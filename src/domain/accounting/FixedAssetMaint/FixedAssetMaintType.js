
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

import {FixedAssetMaintMeterType} from '../../accounting/FixedAssetMaintMeter/FixedAssetMaintMeterType.js';
import {FixedAssetMeterType} from '../../accounting/FixedAssetMeter/FixedAssetMeterType.js';
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {ProductMaintTypeType} from '../../product/ProductMaintType/ProductMaintTypeType.js';
import {ProductMeterTypeType} from '../../product/ProductMeterType/ProductMeterTypeType.js';
import {InventoryItemDetailType} from '../../product/InventoryItemDetail/InventoryItemDetailType.js';
import {ItemIssuanceType} from '../../shipment/ItemIssuance/ItemIssuanceType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';


const FixedAssetMaintType = new GraphQLObjectType({
  name: 'FixedAssetMaintType',
  description: 'Type for FixedAssetMaint in accounting',

  fields: () => ({
    intervalUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    purchaseOrder: {
      type: OrderHeaderType,
      args : {purchaseOrderId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${fixedAssetMaint.purchaseOrderId}`)
    },
    scheduleWorkEffort: {
      type: WorkEffortType,
      args : {scheduleWorkEffortId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${fixedAssetMaint.scheduleWorkEffortId}`)
    },
    intervalQuantity: {type: GraphQLFloat},
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    maintHistSeqId: {type: GraphQLString},
    productMaintType: {
      type: ProductMaintTypeType,
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`product/product/productMaintTypes/find?productMaintTypeId=${fixedAssetMaint.productMaintTypeId}`)
    },
    intervalMeterType: {
      type: ProductMeterTypeType,
      args : {intervalMeterTypeId: {type: GraphQLString}},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbiz.load(`product/product/productMeterTypes/find?productMeterTypeId=${fixedAssetMaint.intervalMeterTypeId}`)
    },
    productMaintSeqId: {type: GraphQLString},
    inventoryItemDetails: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemDetails/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    fixedAssetMaintMeters: {
      type: new GraphQLList(FixedAssetMaintMeterType),
      args : {},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMaintMeters/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    itemIssuances: {
      type: new GraphQLList(ItemIssuanceType),
      args : {},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`shipment/itemIssuances/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    },
    fixedAssetMeters: {
      type: new GraphQLList(FixedAssetMeterType),
      args : {},
      resolve: (fixedAssetMaint, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMeters/find?fixedAssetId=${fixedAssetMaint.fixedAssetId}`)
    }
  })
});

export {FixedAssetMaintType};
    