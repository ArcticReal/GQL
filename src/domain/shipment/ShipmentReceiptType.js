
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
import {ShipmentReceiptRoleType} from '../shipment/ShipmentReceiptRoleType.js';
import {ReturnItemType} from '../order/ReturnItemType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {ProductType} from '../product/ProductType.js';
import {InventoryItemDetailType} from '../product/InventoryItemDetailType.js';
import {OrderItemBillingType} from '../order/OrderItemBillingType.js';
import {ShipmentItemType} from '../shipment/ShipmentItemType.js';
import {RejectionReasonType} from '../shipment/RejectionReasonType.js';
import {UserLoginType} from '../login/UserLoginType.js';
import {ReturnItemBillingType} from '../order/ReturnItemBillingType.js';


const ShipmentReceiptType = new GraphQLObjectType({
  name: 'ShipmentReceiptType',
  description: 'Type for ShipmentReceipt in shipment',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${shipmentReceipt.productId}`)
    },
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${shipmentReceipt.orderId}`)
    },
    quantityAccepted: {type: GraphQLFloat},
    shipmentPackageSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    quantityRejected: {type: GraphQLFloat},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${shipmentReceipt.inventoryItemId}`)
    },
    rejection: {
      type: RejectionReasonType,
      args : {rejectionId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`rejectionReasons/find?rejectionId=${shipmentReceipt.rejectionId}`)
    },
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`shipmentItems/find?shipmentId=${shipmentReceipt.shipmentId}`)
    },
    receivedByUserLogin: {
      type: UserLoginType,
      args : {receivedByUserLoginId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${shipmentReceipt.receivedByUserLoginId}`)
    },
    return: {
      type: ReturnItemType,
      args : {returnId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`returnItems/find?returnId=${shipmentReceipt.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    datetimeReceived: {type: GraphQLString},
    itemDescription: {type: GraphQLString},
    receiptId: {type: GraphQLString},
    returnItemBilling: {
      type: new GraphQLList(ReturnItemBillingType),
      args : {receiptId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`returnItemBillings/find?receiptId=${shipmentReceipt.receiptId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {receiptId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?receiptId=${shipmentReceipt.receiptId}`)
    },
    shipmentReceiptRole: {
      type: new GraphQLList(ShipmentReceiptRoleType),
      args : {receiptId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceiptRoles/find?receiptId=${shipmentReceipt.receiptId}`)
    },
    inventoryItemDetail: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {receiptId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`inventoryItemDetails/find?receiptId=${shipmentReceipt.receiptId}`)
    },
    orderItemBilling: {
      type: new GraphQLList(OrderItemBillingType),
      args : {receiptId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`orderItemBillings/find?receiptId=${shipmentReceipt.receiptId}`)
    }
  })
});

export {ShipmentReceiptType};
    