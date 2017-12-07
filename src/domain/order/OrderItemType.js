
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
import {OrderItemGroupType} from '../order/OrderItemGroupType.js';
import {ReturnItemType} from '../order/ReturnItemType.js';
import {FinAccountTransType} from '../accounting/FinAccountTransType.js';
import {QuoteItemType} from '../order/QuoteItemType.js';
import {ProductType} from '../product/ProductType.js';
import {ItemIssuanceType} from '../shipment/ItemIssuanceType.js';
import {OrderItemGroupOrderType} from '../order/OrderItemGroupOrderType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {OrderItemShipGrpInvResType} from '../order/OrderItemShipGrpInvResType.js';
import {ProductOrderItemType} from '../order/ProductOrderItemType.js';
import {PicklistItemType} from '../shipment/PicklistItemType.js';
import {WorkOrderItemFulfillmentType} from '../order/WorkOrderItemFulfillmentType.js';
import {OrderItemChangeType} from '../order/OrderItemChangeType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';
import {UserLoginType} from '../login/UserLoginType.js';
import {OrderItemContactMechType} from '../order/OrderItemContactMechType.js';
import {GiftCardFulfillmentType} from '../accounting/GiftCardFulfillmentType.js';
import {SalesOpportunityType} from '../marketing/SalesOpportunityType.js';
import {OrderItemTypeType} from '../order/OrderItemTypeType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';
import {OrderItemBillingType} from '../order/OrderItemBillingType.js';
import {OrderItemRoleType} from '../order/OrderItemRoleType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {OrderItemAttributeType} from '../order/OrderItemAttributeType.js';
import {OrderRequirementCommitmentType} from '../order/OrderRequirementCommitmentType.js';
import {OrderItemShipGroupAssocType} from '../order/OrderItemShipGroupAssocType.js';
import {OrderItemPriceInfoType} from '../order/OrderItemPriceInfoType.js';


const OrderItemType = new GraphQLObjectType({
  name: 'OrderItemType',
  description: 'Type for OrderItem in order',

  fields: () => ({
    dontCancelSetUserLogin: {
      type: UserLoginType,
      args : {dontCancelSetUserLogin: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${orderItem.dontCancelSetUserLogin}`)
    },
    order: {
      type: OrderItemGroupType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`orderItemGroups/find?orderId=${orderItem.orderId}`)
    },
    isPromo: {type: GraphQLBoolean},
    isModifiedPrice: {type: GraphQLBoolean},
    shipBeforeDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    shoppingListId: {type: GraphQLString},
    unitListPrice: {type: GraphQLFloat},
    deploymentId: {type: GraphQLString},
    unitAverageCost: {type: GraphQLFloat},
    cancelBackOrderDate: {type: GraphQLString},
    itemDescription: {type: GraphQLString},
    selectedAmount: {type: GraphQLFloat},
    orderItemType: {
      type: OrderItemTypeType,
      args : {orderItemTypeId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`orderItemTypes/find?orderItemTypeId=${orderItem.orderItemTypeId}`)
    },
    orderItemSeqId: {type: GraphQLString},
    unitPrice: {type: GraphQLFloat},
    dontCancelSetDate: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${orderItem.productId}`)
    },
    recurringFreqUomId: {type: GraphQLString},
    unitRecurringPrice: {type: GraphQLFloat},
    orderItemGroupSeqId: {type: GraphQLString},
    isItemGroupPrimary: {type: GraphQLBoolean},
    quoteItemSeqId: {type: GraphQLString},
    autoCancelDate: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    externalId: {type: GraphQLString},
    fromInventoryItem: {
      type: InventoryItemType,
      args : {fromInventoryItemId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${orderItem.fromInventoryItemId}`)
    },
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${orderItem.overrideGlAccountId}`)
    },
    budgetItemSeqId: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    correspondingPoId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    quote: {
      type: QuoteItemType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`quoteItems/find?quoteId=${orderItem.quoteId}`)
    },
    cancelQuantity: {type: GraphQLFloat},
    shipAfterDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    syncStatusId: {type: GraphQLString},
    estimatedShipDate: {type: GraphQLString},
    shoppingListItemSeqId: {type: GraphQLString},
    subscriptionId: {type: GraphQLString},
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${orderItem.changeByUserLoginId}`)
    },
    prodCatalogId: {type: GraphQLString},
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`salesOpportunitys/find?salesOpportunityId=${orderItem.salesOpportunityId}`)
    },
    orderItemContactMech: {
      type: new GraphQLList(OrderItemContactMechType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemContactMechs/find?orderId=${orderItem.orderId}`)
    },
    orderItemGroupOrder: {
      type: new GraphQLList(OrderItemGroupOrderType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemGroupOrders/find?orderId=${orderItem.orderId}`)
    },
    orderItemPriceInfo: {
      type: new GraphQLList(OrderItemPriceInfoType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemPriceInfos/find?orderId=${orderItem.orderId}`)
    },
    shipmentReceipt: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?orderId=${orderItem.orderId}`)
    },
    workOrderItemFulfillment: {
      type: new GraphQLList(WorkOrderItemFulfillmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`workOrderItemFulfillments/find?orderId=${orderItem.orderId}`)
    },
    productOrderItem: {
      type: new GraphQLList(ProductOrderItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`productOrderItems/find?orderId=${orderItem.orderId}`)
    },
    orderItemAttribute: {
      type: new GraphQLList(OrderItemAttributeType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemAttributes/find?orderId=${orderItem.orderId}`)
    },
    orderRequirementCommitment: {
      type: new GraphQLList(OrderRequirementCommitmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderRequirementCommitments/find?orderId=${orderItem.orderId}`)
    },
    finAccountTrans: {
      type: new GraphQLList(FinAccountTransType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?orderId=${orderItem.orderId}`)
    },
    itemIssuance: {
      type: new GraphQLList(ItemIssuanceType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?orderId=${orderItem.orderId}`)
    },
    productOrderItem: {
      type: new GraphQLList(ProductOrderItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`productOrderItems/find?orderId=${orderItem.orderId}`)
    },
    giftCardFulfillment: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`giftCardFulfillments/find?orderId=${orderItem.orderId}`)
    },
    orderItemShipGrpInvRes: {
      type: new GraphQLList(OrderItemShipGrpInvResType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGrpInvRess/find?orderId=${orderItem.orderId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?orderId=${orderItem.orderId}`)
    },
    orderItemChange: {
      type: new GraphQLList(OrderItemChangeType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemChanges/find?orderId=${orderItem.orderId}`)
    },
    orderItemRole: {
      type: new GraphQLList(OrderItemRoleType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemRoles/find?orderId=${orderItem.orderId}`)
    },
    orderItemBilling: {
      type: new GraphQLList(OrderItemBillingType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemBillings/find?orderId=${orderItem.orderId}`)
    },
    orderItemShipGroupAssoc: {
      type: new GraphQLList(OrderItemShipGroupAssocType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroupAssocs/find?orderId=${orderItem.orderId}`)
    },
    picklistItem: {
      type: new GraphQLList(PicklistItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`picklistItems/find?orderId=${orderItem.orderId}`)
    },
    returnItem: {
      type: new GraphQLList(ReturnItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?orderId=${orderItem.orderId}`)
    },
    fixedAsset: {
      type: new GraphQLList(FixedAssetType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?orderId=${orderItem.orderId}`)
    }
  })
});

export {OrderItemType};
    