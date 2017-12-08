
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

import {InventoryItemType} from '../product/InventoryItem.js';
import {InventoryTransferType} from '../product/InventoryTransfer.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaint.js';
import {OrderItemType} from '../order/OrderItem.js';
import {InventoryItemDetailType} from '../product/InventoryItemDetail.js';
import {ItemIssuanceRoleType} from '../shipment/ItemIssuanceRole.js';
import {OrderItemBillingType} from '../order/OrderItemBilling.js';
import {ShipmentItemType} from '../shipment/ShipmentItem.js';
import {UserLoginType} from '../login/UserLogin.js';


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
    inventoryItemDetails: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemDetails/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    },
    itemIssuanceRoles: {
      type: new GraphQLList(ItemIssuanceRoleType),
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`itemIssuanceRoles/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    },
    orderItemBillings: {
      type: new GraphQLList(OrderItemBillingType),
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`orderItemBillings/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    },
    inventoryTransfers: {
      type: new GraphQLList(InventoryTransferType),
      args : {itemIssuanceId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`inventoryTransfers/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    }
  })
});

export {ItemIssuanceType};
    




const ItemIssuanceInputType = new GraphQLInputObjectType({
  name: 'ItemIssuanceInputType',
  description: 'input type for ItemIssuance in shipment',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    orderId: {type: GraphQLString},
    maintHistSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    cancelQuantity: {type: GraphQLFloat},
    inventoryItemId: {type: GraphQLString},
    itemIssuanceId: {type: GraphQLString},
    shipmentId: {type: GraphQLString},
    issuedDateTime: {type: GraphQLString},
    fixedAssetId: {type: GraphQLString},
    issuedByUserLoginId: {type: GraphQLString}
  })
});

export {ItemIssuanceInputType};
    