
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
import {InventoryTransferType} from '../product/InventoryTransferType.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaintType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {InventoryItemDetailType} from '../product/InventoryItemDetailType.js';
import {ItemIssuanceRoleType} from '../shipment/ItemIssuanceRoleType.js';
import {OrderItemBillingType} from '../order/OrderItemBillingType.js';
import {ShipmentItemType} from '../shipment/ShipmentItemType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const ItemIssuanceType = new GraphQLObjectType({
  name: 'ItemIssuanceType',
  description: 'Type for ItemIssuance in shipment',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${itemIssuance.orderId}`)
    },
    maintHistSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    cancelQuantity: {type: GraphQLFloat},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${itemIssuance.inventoryItemId}`)
    },
    itemIssuanceId: {type: GraphQLString},
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`shipmentItems/find?shipmentId=${itemIssuance.shipmentId}`)
    },
    issuedDateTime: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetMaintType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`fixedAssetMaints/find?fixedAssetId=${itemIssuance.fixedAssetId}`)
    },
    issuedByUserLogin: {
      type: UserLoginType,
      args : {issuedByUserLoginId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${itemIssuance.issuedByUserLoginId}`)
    },
    inventoryItemDetail: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemDetails/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    },
    itemIssuanceRole: {
      type: new GraphQLList(ItemIssuanceRoleType),
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`itemIssuanceRoles/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    },
    orderItemBilling: {
      type: new GraphQLList(OrderItemBillingType),
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`orderItemBillings/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    },
    inventoryTransfer: {
      type: new GraphQLList(InventoryTransferType),
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`inventoryTransfers/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    }
  })
});

export {ItemIssuanceType};
    