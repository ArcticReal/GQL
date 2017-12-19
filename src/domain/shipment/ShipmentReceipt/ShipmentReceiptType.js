
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
import {ShipmentReceiptRoleType} from '../../shipment/ShipmentReceiptRole/ShipmentReceiptRoleType.js';
import {ReturnItemType} from '../../order/ReturnItem/ReturnItemType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {InventoryItemDetailType} from '../../product/InventoryItemDetail/InventoryItemDetailType.js';
import {OrderItemBillingType} from '../../order/OrderItemBilling/OrderItemBillingType.js';
import {ShipmentItemType} from '../../shipment/ShipmentItem/ShipmentItemType.js';
import {RejectionReasonType} from '../../shipment/RejectionReason/RejectionReasonType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';
import {ReturnItemBillingType} from '../../order/ReturnItemBilling/ReturnItemBillingType.js';


const ShipmentReceiptType = new GraphQLObjectType({
  name: 'ShipmentReceiptType',
  description: 'Type for ShipmentReceipt in shipment',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${shipmentReceipt.productId}`)
    },
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${shipmentReceipt.orderId}`)
    },
    quantityAccepted: {type: GraphQLFloat},
    shipmentPackageSeqId: {type: GraphQLString},
    shipmentItemSeqId: {type: GraphQLString},
    quantityRejected: {type: GraphQLFloat},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${shipmentReceipt.inventoryItemId}`)
    },
    rejection: {
      type: RejectionReasonType,
      args : {rejectionId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`shipment/rejectionReasons/find?rejectionId=${shipmentReceipt.rejectionId}`)
    },
    shipment: {
      type: ShipmentItemType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentItems/find?shipmentId=${shipmentReceipt.shipmentId}`)
    },
    receivedByUserLogin: {
      type: UserLoginType,
      args : {receivedByUserLoginId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${shipmentReceipt.receivedByUserLoginId}`)
    },
    return: {
      type: ReturnItemType,
      args : {returnId: {type: GraphQLString}},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbiz.load(`order/returnItems/find?returnId=${shipmentReceipt.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    datetimeReceived: {type: GraphQLString},
    itemDescription: {type: GraphQLString},
    receiptId: {type: GraphQLString},
    returnItemBillings: {
      type: new GraphQLList(ReturnItemBillingType),
      args : {},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemBillings/find?receiptId=${shipmentReceipt.receiptId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?receiptId=${shipmentReceipt.receiptId}`)
    },
    shipmentReceiptRoles: {
      type: new GraphQLList(ShipmentReceiptRoleType),
      args : {},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentReceiptRoles/find?receiptId=${shipmentReceipt.receiptId}`)
    },
    inventoryItemDetails: {
      type: new GraphQLList(InventoryItemDetailType),
      args : {},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`product/inventoryItem/inventoryItemDetails/find?receiptId=${shipmentReceipt.receiptId}`)
    },
    orderItemBillings: {
      type: new GraphQLList(OrderItemBillingType),
      args : {},
      resolve: (shipmentReceipt, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemBillings/find?receiptId=${shipmentReceipt.receiptId}`)
    }
  })
});

export {ShipmentReceiptType};
    