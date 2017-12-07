
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderItemGroupType} from '../order/OrderItemGroupType.js';
import {CommunicationEventOrderType} from '../order/CommunicationEventOrderType.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponseType.js';
import {ReturnItemType} from '../order/ReturnItemType.js';
import {OrderAdjustmentType} from '../order/OrderAdjustmentType.js';
import {ShoppingListType} from '../order/ShoppingListType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {OrderNotificationType} from '../order/OrderNotificationType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreferenceType.js';
import {OrderShipmentType} from '../order/OrderShipmentType.js';
import {ProductOrderItemType} from '../order/ProductOrderItemType.js';
import {OrderContactMechType} from '../order/OrderContactMechType.js';
import {WorkOrderItemFulfillmentType} from '../order/WorkOrderItemFulfillmentType.js';
import {OrderStatusType} from '../order/OrderStatusType.js';
import {OrderTypeType} from '../order/OrderTypeType.js';
import {BillingAccountType} from '../accounting/BillingAccountType.js';
import {OrderAttributeType} from '../order/OrderAttributeType.js';
import {TrackingCodeOrderReturnType} from '../marketing/TrackingCodeOrderReturnType.js';
import {ProductPromoUseType} from '../product/ProductPromoUseType.js';
import {UserLoginType} from '../login/UserLoginType.js';
import {GiftCardFulfillmentType} from '../accounting/GiftCardFulfillmentType.js';
import {OrderRoleType} from '../order/OrderRoleType.js';
import {OrderTermType} from '../order/OrderTermType.js';
import {OrderContentType} from '../order/OrderContentType.js';
import {TrackingCodeOrderType} from '../marketing/TrackingCodeOrderType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {OrderHeaderWorkEffortType} from '../order/OrderHeaderWorkEffortType.js';
import {OrderItemBillingType} from '../order/OrderItemBillingType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';
import {OrderItemRoleType} from '../order/OrderItemRoleType.js';
import {OrderHeaderNoteType} from '../order/OrderHeaderNoteType.js';
import {OrderProductPromoCodeType} from '../order/OrderProductPromoCodeType.js';
import {FixedAssetMaintOrderType} from '../accounting/FixedAssetMaintOrderType.js';
import {FixedAssetMaintType} from '../accounting/FixedAssetMaintType.js';
import {OrderDeliveryScheduleType} from '../order/OrderDeliveryScheduleType.js';
import {OrderRequirementCommitmentType} from '../order/OrderRequirementCommitmentType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {OrderItemShipGroupAssocType} from '../order/OrderItemShipGroupAssocType.js';
import {FacilityType} from '../product/FacilityType.js';
import {OrderItemAssocType} from '../order/OrderItemAssocType.js';


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
    orderItemAssoc: {
      type: new GraphQLList(OrderItemAssocType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemAssocs/find?orderId=${orderHeader.orderId}`)
    },
    trackingCodeOrderReturn: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrderReturns/find?orderId=${orderHeader.orderId}`)
    },
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?orderId=${orderHeader.orderId}`)
    },
    orderNotification: {
      type: new GraphQLList(OrderNotificationType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderNotifications/find?orderId=${orderHeader.orderId}`)
    },
    productOrderItem: {
      type: new GraphQLList(ProductOrderItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`productOrderItems/find?orderId=${orderHeader.orderId}`)
    },
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?orderId=${orderHeader.orderId}`)
    },
    orderHeaderWorkEffort: {
      type: new GraphQLList(OrderHeaderWorkEffortType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderHeaderWorkEfforts/find?orderId=${orderHeader.orderId}`)
    },
    orderItemGroup: {
      type: new GraphQLList(OrderItemGroupType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemGroups/find?orderId=${orderHeader.orderId}`)
    },
    orderShipment: {
      type: new GraphQLList(OrderShipmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderShipments/find?orderId=${orderHeader.orderId}`)
    },
    giftCardFulfillment: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`giftCardFulfillments/find?orderId=${orderHeader.orderId}`)
    },
    orderHeaderNote: {
      type: new GraphQLList(OrderHeaderNoteType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderHeaderNotes/find?orderId=${orderHeader.orderId}`)
    },
    fixedAssetMaintOrder: {
      type: new GraphQLList(FixedAssetMaintOrderType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaintOrders/find?orderId=${orderHeader.orderId}`)
    },
    orderItemAssoc: {
      type: new GraphQLList(OrderItemAssocType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemAssocs/find?orderId=${orderHeader.orderId}`)
    },
    orderProductPromoCode: {
      type: new GraphQLList(OrderProductPromoCodeType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderProductPromoCodes/find?orderId=${orderHeader.orderId}`)
    },
    workOrderItemFulfillment: {
      type: new GraphQLList(WorkOrderItemFulfillmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`workOrderItemFulfillments/find?orderId=${orderHeader.orderId}`)
    },
    orderContent: {
      type: new GraphQLList(OrderContentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderContents/find?orderId=${orderHeader.orderId}`)
    },
    communicationEventOrder: {
      type: new GraphQLList(CommunicationEventOrderType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`communicationEventOrders/find?orderId=${orderHeader.orderId}`)
    },
    orderItemBilling: {
      type: new GraphQLList(OrderItemBillingType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemBillings/find?orderId=${orderHeader.orderId}`)
    },
    orderPaymentPreference: {
      type: new GraphQLList(OrderPaymentPreferenceType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderPaymentPreferences/find?orderId=${orderHeader.orderId}`)
    },
    orderAttribute: {
      type: new GraphQLList(OrderAttributeType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderAttributes/find?orderId=${orderHeader.orderId}`)
    },
    orderStatus: {
      type: new GraphQLList(OrderStatusType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderStatuss/find?orderId=${orderHeader.orderId}`)
    },
    orderRequirementCommitment: {
      type: new GraphQLList(OrderRequirementCommitmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderRequirementCommitments/find?orderId=${orderHeader.orderId}`)
    },
    fixedAsset: {
      type: new GraphQLList(FixedAssetType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?orderId=${orderHeader.orderId}`)
    },
    returnItemResponse: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItemResponses/find?orderId=${orderHeader.orderId}`)
    },
    productPromoUse: {
      type: new GraphQLList(ProductPromoUseType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`productPromoUses/find?orderId=${orderHeader.orderId}`)
    },
    orderDeliverySchedule: {
      type: new GraphQLList(OrderDeliveryScheduleType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderDeliverySchedules/find?orderId=${orderHeader.orderId}`)
    },
    orderContactMech: {
      type: new GraphQLList(OrderContactMechType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderContactMechs/find?orderId=${orderHeader.orderId}`)
    },
    returnItem: {
      type: new GraphQLList(ReturnItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?orderId=${orderHeader.orderId}`)
    },
    trackingCodeOrder: {
      type: new GraphQLList(TrackingCodeOrderType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrders/find?orderId=${orderHeader.orderId}`)
    },
    orderAdjustment: {
      type: new GraphQLList(OrderAdjustmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustments/find?orderId=${orderHeader.orderId}`)
    },
    orderRole: {
      type: new GraphQLList(OrderRoleType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderRoles/find?orderId=${orderHeader.orderId}`)
    },
    orderItemRole: {
      type: new GraphQLList(OrderItemRoleType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemRoles/find?orderId=${orderHeader.orderId}`)
    },
    orderItemShipGroupAssoc: {
      type: new GraphQLList(OrderItemShipGroupAssocType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroupAssocs/find?orderId=${orderHeader.orderId}`)
    },
    productOrderItem: {
      type: new GraphQLList(ProductOrderItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`productOrderItems/find?orderId=${orderHeader.orderId}`)
    },
    orderItem: {
      type: new GraphQLList(OrderItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?orderId=${orderHeader.orderId}`)
    },
    fixedAssetMaint: {
      type: new GraphQLList(FixedAssetMaintType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`fixedAssetMaints/find?orderId=${orderHeader.orderId}`)
    },
    orderTerm: {
      type: new GraphQLList(OrderTermType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderHeader, args, {loaders}) => loaders.ofbizArray.load(`orderTerms/find?orderId=${orderHeader.orderId}`)
    }
  })
});

export {OrderHeaderType};
    