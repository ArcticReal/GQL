
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

import {InventoryItemType} from '../../product/InventoryItem/InventoryItemType.js';
import {InventoryTransferType} from '../../product/InventoryTransfer/InventoryTransferType.js';
import {FixedAssetMaintType} from '../../accounting/FixedAssetMaint/FixedAssetMaintType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';
import {InventoryItemDetailType} from '../../product/InventoryItemDetail/InventoryItemDetailType.js';
import {ItemIssuanceRoleType} from '../../shipment/ItemIssuanceRole/ItemIssuanceRoleType.js';
import {OrderItemBillingType} from '../../order/OrderItemBilling/OrderItemBillingType.js';
import {ShipmentItemType} from '../../shipment/ShipmentItem/ShipmentItemType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


const ItemIssuanceType = new GraphQLObjectType({
  name: 'ItemIssuanceType',
  description: 'Type for ItemIssuance in shipment',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${itemIssuance.orderId}`)
    },
    maintHistSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    cancelQuantity: {type: GraphQLFloat},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${itemIssuance.inventoryItemId}`)
    },
    itemIssuanceId: {type: GraphQLString},
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentItems/find?shipmentId=${itemIssuance.shipmentId}`)
    },
    issuedDateTime: {type: GraphQLString},
    fixedAsset: {
      type: FixedAssetMaintType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAsset/fixedAssetMaints/find?fixedAssetId=${itemIssuance.fixedAssetId}`)
    },
    issuedByUserLogin: {
      type: UserLoginType,
      args : {issuedByUserLoginId: {type: GraphQLString}},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${itemIssuance.issuedByUserLoginId}`)
    },
    inventoryItemDetails: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemDetails/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    },
    itemIssuanceRoles: {
      type: new GraphQLList(ItemIssuanceRoleType),
      args : {},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`shipment/itemIssuance/itemIssuanceRoles/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    },
    orderItemBillings: {
      type: new GraphQLList(OrderItemBillingType),
      args : {},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemBillings/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    },
    inventoryTransfers: {
      type: new GraphQLList(InventoryTransferType),
      args : {},
      resolve: (itemIssuance, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryTransfers/find?itemIssuanceId=${itemIssuance.itemIssuanceId}`)
    }
  })
});

export {ItemIssuanceType};
    