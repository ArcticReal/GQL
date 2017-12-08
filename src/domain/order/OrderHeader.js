
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

import {OrderItemGroupType} from '../order/OrderItemGroup.js';
import {CommunicationEventOrderType} from '../order/CommunicationEventOrder.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponse.js';
import {ReturnItemType} from '../order/ReturnItem.js';
import {OrderAdjustmentType} from '../order/OrderAdjustment.js';
import {ShoppingListType} from '../order/ShoppingList.js';
import {ProductStoreType} from '../product/ProductStore.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {OrderNotificationType} from '../order/OrderNotification.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreference.js';
import {OrderShipmentType} from '../order/OrderShipment.js';
import {ProductOrderItemType} from '../order/ProductOrderItem.js';
import {OrderContactMechType} from '../order/OrderContactMech.js';
import {WorkOrderItemFulfillmentType} from '../order/WorkOrderItemFulfillment.js';
import {OrderStatusType} from '../order/OrderStatus.js';
import {OrderTypeType} from '../order/OrderType.js';
import {BillingAccountType} from '../accounting/BillingAccount.js';
import {OrderAttributeType} from '../order/OrderAttribute.js';
import {TrackingCodeOrderReturnType} from '../marketing/TrackingCodeOrderReturn.js';
import {ProductPromoUseType} from '../product/ProductPromoUse.js';
import {UserLoginType} from '../login/UserLogin.js';
import {GiftCardFulfillmentType} from '../accounting/GiftCardFulfillment.js';
import {OrderRoleType} from '../order/OrderRole.js';
import {OrderTermType} from '../order/OrderTerm.js';
import {OrderContentType} from '../order/OrderContent.js';
import {TrackingCodeOrderType} from '../marketing/TrackingCodeOrder.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {OrderHeaderWorkEffortType} from '../order/OrderHeaderWorkEffort.js';
import {OrderItemBillingType} from '../order/OrderItemBilling.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';
import {OrderItemRoleType} from '../order/OrderItemRole.js';
import {OrderHeaderNoteType} from '../order/OrderHeaderNote.js';
import {OrderProductPromoCodeType} from '../order/OrderProductPromoCode.js';
import {FixedAssetMaintOrderType} from '../accounting/FixedAssetMaintOrder.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaint.js';
import {OrderDeliveryScheduleType} from '../order/OrderDeliverySchedule.js';
import {OrderRequirementCommitmentType} from '../order/OrderRequirementCommitment.js';
import {OrderItemType} from '../order/OrderItem.js';
import {OrderItemShipGroupAssocType} from '../order/OrderItemShipGroupAssoc.js';
import {FacilityType} from '../product/Facility.js';
import {OrderItemAssocType} from '../order/OrderItemAssoc.js';


const OrderHeaderType = new GraphQLObjectType({
  name: 'OrderHeaderType',
  description: 'Type for OrderHeader in order',

  fields: () => ({
    invoicePerShipment: {type: GraphQLBoolean},
    salesChannelEnumId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderType: {
      type: OrderTypeType,
      args : {orderTypeId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`orderTypes/find?orderTypeId=${orderHeader.orderTypeId}`)
    },
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`billingAccounts/find?billingAccountId=${orderHeader.billingAccountId}`)
    },
    terminalId: {type: GraphQLString},
    isViewed: {type: GraphQLBoolean},
    visitId: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${orderHeader.productStoreId}`)
    },
    remainingSubTotal: {type: GraphQLFloat},
    orderName: {type: GraphQLString},
    webSiteId: {type: GraphQLString},
    isRushOrder: {type: GraphQLBoolean},
    entryDate: {type: GraphQLString},
    grandTotal: {type: GraphQLFloat},
    autoOrderShoppingList: {
      type: ShoppingListType,
      args : {autoOrderShoppingListId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`shoppingLists/find?shoppingListId=${orderHeader.autoOrderShoppingListId}`)
    },
    externalId: {type: GraphQLString},
    priority: {type: GraphQLBoolean},
    transactionId: {type: GraphQLString},
    firstAttemptOrderId: {type: GraphQLString},
    originFacility: {
      type: FacilityType,
      args : {originFacilityId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${orderHeader.originFacilityId}`)
    },
    statusId: {type: GraphQLString},
    createdBy: {
      type: UserLoginType,
      args : {createdBy: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${orderHeader.createdBy}`)
    },
    currencyUom: {type: GraphQLString},
    syncStatusId: {type: GraphQLString},
    pickSheetPrintedDate: {type: GraphQLString},
    needsInventoryIssuance: {type: GraphQLBoolean},
    orderDate: {type: GraphQLString},
    internalCode: {type: GraphQLString},
    orderItemAssocs: {
      type: new GraphQLList(OrderItemAssocType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemAssocs/find?orderId=${orderHeader.orderId}`)
    },
    trackingCodeOrderReturns: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrderReturns/find?orderId=${orderHeader.orderId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?orderId=${orderHeader.orderId}`)
    },
    orderNotifications: {
      type: new GraphQLList(OrderNotificationType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderNotifications/find?orderId=${orderHeader.orderId}`)
    },
    productOrderItems: {
      type: new GraphQLList(ProductOrderItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`productOrderItems/find?orderId=${orderHeader.orderId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?orderId=${orderHeader.orderId}`)
    },
    orderHeaderWorkEfforts: {
      type: new GraphQLList(OrderHeaderWorkEffortType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderHeaderWorkEfforts/find?orderId=${orderHeader.orderId}`)
    },
    orderItemGroups: {
      type: new GraphQLList(OrderItemGroupType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemGroups/find?orderId=${orderHeader.orderId}`)
    },
    orderShipments: {
      type: new GraphQLList(OrderShipmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderShipments/find?orderId=${orderHeader.orderId}`)
    },
    giftCardFulfillments: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`giftCardFulfillments/find?orderId=${orderHeader.orderId}`)
    },
    orderHeaderNotes: {
      type: new GraphQLList(OrderHeaderNoteType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderHeaderNotes/find?orderId=${orderHeader.orderId}`)
    },
    fixedAssetMaintOrders: {
      type: new GraphQLList(FixedAssetMaintOrderType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaintOrders/find?orderId=${orderHeader.orderId}`)
    },
    orderProductPromoCodes: {
      type: new GraphQLList(OrderProductPromoCodeType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderProductPromoCodes/find?orderId=${orderHeader.orderId}`)
    },
    workOrderItemFulfillments: {
      type: new GraphQLList(WorkOrderItemFulfillmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`workOrderItemFulfillments/find?orderId=${orderHeader.orderId}`)
    },
    orderContents: {
      type: new GraphQLList(OrderContentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderContents/find?orderId=${orderHeader.orderId}`)
    },
    communicationEventOrders: {
      type: new GraphQLList(CommunicationEventOrderType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`communicationEventOrders/find?orderId=${orderHeader.orderId}`)
    },
    orderItemBillings: {
      type: new GraphQLList(OrderItemBillingType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemBillings/find?orderId=${orderHeader.orderId}`)
    },
    orderPaymentPreferences: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderPaymentPreferences/find?orderId=${orderHeader.orderId}`)
    },
    orderAttributes: {
      type: new GraphQLList(OrderAttributeType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderAttributes/find?orderId=${orderHeader.orderId}`)
    },
    orderStatuses: {
      type: new GraphQLList(OrderStatusType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderStatuss/find?orderId=${orderHeader.orderId}`)
    },
    orderRequirementCommitments: {
      type: new GraphQLList(OrderRequirementCommitmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderRequirementCommitments/find?orderId=${orderHeader.orderId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?orderId=${orderHeader.orderId}`)
    },
    returnItemResponses: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItemResponses/find?orderId=${orderHeader.orderId}`)
    },
    productPromoUses: {
      type: new GraphQLList(ProductPromoUseType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`productPromoUses/find?orderId=${orderHeader.orderId}`)
    },
    orderDeliverySchedules: {
      type: new GraphQLList(OrderDeliveryScheduleType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderDeliverySchedules/find?orderId=${orderHeader.orderId}`)
    },
    orderContactMeches: {
      type: new GraphQLList(OrderContactMechType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderContactMechs/find?orderId=${orderHeader.orderId}`)
    },
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?orderId=${orderHeader.orderId}`)
    },
    trackingCodeOrders: {
      type: new GraphQLList(TrackingCodeOrderType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrders/find?orderId=${orderHeader.orderId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?orderId=${orderHeader.orderId}`)
    },
    orderRoles: {
      type: new GraphQLList(OrderRoleType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderRoles/find?orderId=${orderHeader.orderId}`)
    },
    orderItemRoles: {
      type: new GraphQLList(OrderItemRoleType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemRoles/find?orderId=${orderHeader.orderId}`)
    },
    orderItemShipGroupAssocs: {
      type: new GraphQLList(OrderItemShipGroupAssocType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroupAssocs/find?orderId=${orderHeader.orderId}`)
    },
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?orderId=${orderHeader.orderId}`)
    },
    fixedAssetMaints: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?orderId=${orderHeader.orderId}`)
    },
    orderTerms: {
      type: new GraphQLList(OrderTermType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderTerms/find?orderId=${orderHeader.orderId}`)
    }
  })
});

export {OrderHeaderType};
    




const OrderHeaderInputType = new GraphQLInputObjectType({
  name: 'OrderHeaderInputType',
  description: 'input type for OrderHeader in order',

  fields: () => ({
    invoicePerShipment: {type: GraphQLBoolean},
    salesChannelEnumId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderTypeId: {type: GraphQLString},
    billingAccountId: {type: GraphQLString},
    terminalId: {type: GraphQLString},
    isViewed: {type: GraphQLBoolean},
    visitId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    remainingSubTotal: {type: GraphQLFloat},
    orderName: {type: GraphQLString},
    webSiteId: {type: GraphQLString},
    isRushOrder: {type: GraphQLBoolean},
    entryDate: {type: GraphQLString},
    grandTotal: {type: GraphQLFloat},
    autoOrderShoppingListId: {type: GraphQLString},
    externalId: {type: GraphQLString},
    priority: {type: GraphQLBoolean},
    transactionId: {type: GraphQLString},
    firstAttemptOrderId: {type: GraphQLString},
    originFacilityId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    createdBy: {type: GraphQLString},
    currencyUom: {type: GraphQLString},
    syncStatusId: {type: GraphQLString},
    pickSheetPrintedDate: {type: GraphQLString},
    needsInventoryIssuance: {type: GraphQLBoolean},
    orderDate: {type: GraphQLString},
    internalCode: {type: GraphQLString}
  })
});

export {OrderHeaderInputType};
    