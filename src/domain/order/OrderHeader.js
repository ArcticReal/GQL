
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
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`order/orderTypes/find?orderTypeId=${orderHeader.orderTypeId}`)
    },
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`accounting/billingAccounts/find?billingAccountId=${orderHeader.billingAccountId}`)
    },
    terminalId: {type: GraphQLString},
    isViewed: {type: GraphQLBoolean},
    visitId: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${orderHeader.productStoreId}`)
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
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`order/shoppingLists/find?shoppingListId=${orderHeader.autoOrderShoppingListId}`)
    },
    externalId: {type: GraphQLString},
    priority: {type: GraphQLBoolean},
    transactionId: {type: GraphQLString},
    firstAttemptOrderId: {type: GraphQLString},
    originFacility: {
      type: FacilityType,
      args : {originFacilityId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${orderHeader.originFacilityId}`)
    },
    statusId: {type: GraphQLString},
    createdBy: {
      type: UserLoginType,
      args : {createdBy: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${orderHeader.createdBy}`)
    },
    currencyUom: {type: GraphQLString},
    syncStatusId: {type: GraphQLString},
    pickSheetPrintedDate: {type: GraphQLString},
    needsInventoryIssuance: {type: GraphQLBoolean},
    orderDate: {type: GraphQLString},
    internalCode: {type: GraphQLString},
    orderItemAssocs: {
      type: new GraphQLList(OrderItemAssocType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemAssocs/find?orderId=${orderHeader.orderId}`)
    },
    trackingCodeOrderReturns: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCode/trackingCodeOrderReturns/find?orderId=${orderHeader.orderId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`/shipments/find?orderId=${orderHeader.orderId}`)
    },
    orderNotifications: {
      type: new GraphQLList(OrderNotificationType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderNotifications/find?orderId=${orderHeader.orderId}`)
    },
    productOrderItems: {
      type: new GraphQLList(ProductOrderItemType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/productOrderItems/find?orderId=${orderHeader.orderId}`)
    },
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroups/find?orderId=${orderHeader.orderId}`)
    },
    orderHeaderWorkEfforts: {
      type: new GraphQLList(OrderHeaderWorkEffortType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeader/orderHeaderWorkEfforts/find?orderId=${orderHeader.orderId}`)
    },
    orderItemGroups: {
      type: new GraphQLList(OrderItemGroupType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemGroups/find?orderId=${orderHeader.orderId}`)
    },
    orderShipments: {
      type: new GraphQLList(OrderShipmentType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderShipments/find?orderId=${orderHeader.orderId}`)
    },
    giftCardFulfillments: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`accounting/giftCard/giftCardFulfillments/find?orderId=${orderHeader.orderId}`)
    },
    orderHeaderNotes: {
      type: new GraphQLList(OrderHeaderNoteType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderHeader/orderHeaderNotes/find?orderId=${orderHeader.orderId}`)
    },
    fixedAssetMaintOrders: {
      type: new GraphQLList(FixedAssetMaintOrderType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMaintOrders/find?orderId=${orderHeader.orderId}`)
    },
    orderProductPromoCodes: {
      type: new GraphQLList(OrderProductPromoCodeType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderProductPromoCodes/find?orderId=${orderHeader.orderId}`)
    },
    workOrderItemFulfillments: {
      type: new GraphQLList(WorkOrderItemFulfillmentType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/workOrderItemFulfillments/find?orderId=${orderHeader.orderId}`)
    },
    orderContents: {
      type: new GraphQLList(OrderContentType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderContents/find?orderId=${orderHeader.orderId}`)
    },
    communicationEventOrders: {
      type: new GraphQLList(CommunicationEventOrderType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/communicationEventOrders/find?orderId=${orderHeader.orderId}`)
    },
    orderItemBillings: {
      type: new GraphQLList(OrderItemBillingType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemBillings/find?orderId=${orderHeader.orderId}`)
    },
    orderPaymentPreferences: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderPaymentPreferences/find?orderId=${orderHeader.orderId}`)
    },
    orderAttributes: {
      type: new GraphQLList(OrderAttributeType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderAttributes/find?orderId=${orderHeader.orderId}`)
    },
    orderStatuses: {
      type: new GraphQLList(OrderStatusType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderStatuss/find?orderId=${orderHeader.orderId}`)
    },
    orderRequirementCommitments: {
      type: new GraphQLList(OrderRequirementCommitmentType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/orderRequirementCommitments/find?orderId=${orderHeader.orderId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAssets/find?orderId=${orderHeader.orderId}`)
    },
    returnItemResponses: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemResponses/find?orderId=${orderHeader.orderId}`)
    },
    productPromoUses: {
      type: new GraphQLList(ProductPromoUseType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPromoUses/find?orderId=${orderHeader.orderId}`)
    },
    orderDeliverySchedules: {
      type: new GraphQLList(OrderDeliveryScheduleType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderDeliverySchedules/find?orderId=${orderHeader.orderId}`)
    },
    orderContactMeches: {
      type: new GraphQLList(OrderContactMechType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderContactMechs/find?orderId=${orderHeader.orderId}`)
    },
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/returnItems/find?orderId=${orderHeader.orderId}`)
    },
    trackingCodeOrders: {
      type: new GraphQLList(TrackingCodeOrderType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCode/trackingCodeOrders/find?orderId=${orderHeader.orderId}`)
    },
    orderAdjustments: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustments/find?orderId=${orderHeader.orderId}`)
    },
    orderRoles: {
      type: new GraphQLList(OrderRoleType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderRoles/find?orderId=${orderHeader.orderId}`)
    },
    orderItemRoles: {
      type: new GraphQLList(OrderItemRoleType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemRoles/find?orderId=${orderHeader.orderId}`)
    },
    orderItemShipGroupAssocs: {
      type: new GraphQLList(OrderItemShipGroupAssocType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroupAssocs/find?orderId=${orderHeader.orderId}`)
    },
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderItems/find?orderId=${orderHeader.orderId}`)
    },
    fixedAssetMaints: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAsset/fixedAssetMaints/find?orderId=${orderHeader.orderId}`)
    },
    orderTerms: {
      type: new GraphQLList(OrderTermType),
      args : {},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`order/orderTerms/find?orderId=${orderHeader.orderId}`)
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
    