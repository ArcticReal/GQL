
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
import {OrderItemGroupType} from '../order/OrderItemGroup.js';
import {ReturnItemType} from '../order/ReturnItem.js';
import {FinAccountTransType} from '../accounting/FinAccountTrans.js';
import {QuoteItemType} from '../order/QuoteItem.js';
import {ProductType} from '../product/Product.js';
import {ItemIssuanceType} from '../shipment/ItemIssuance.js';
import {OrderItemGroupOrderType} from '../order/OrderItemGroupOrder.js';
import {FixedAssetType} from '../accounting/FixedAsset.js';
import {OrderItemShipGrpInvResType} from '../order/OrderItemShipGrpInvRes.js';
import {ProductOrderItemType} from '../order/ProductOrderItem.js';
import {PicklistItemType} from '../shipment/PicklistItem.js';
import {WorkOrderItemFulfillmentType} from '../order/WorkOrderItemFulfillment.js';
import {OrderItemChangeType} from '../order/OrderItemChange.js';
import {SubscriptionType} from '../product/Subscription.js';
import {UserLoginType} from '../login/UserLogin.js';
import {OrderItemContactMechType} from '../order/OrderItemContactMech.js';
import {GiftCardFulfillmentType} from '../accounting/GiftCardFulfillment.js';
import {SalesOpportunityType} from '../marketing/SalesOpportunity.js';
import {OrderItemTypeType} from '../order/OrderItemType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceipt.js';
import {OrderItemBillingType} from '../order/OrderItemBilling.js';
import {OrderItemRoleType} from '../order/OrderItemRole.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {OrderItemAttributeType} from '../order/OrderItemAttribute.js';
import {OrderRequirementCommitmentType} from '../order/OrderRequirementCommitment.js';
import {OrderItemShipGroupAssocType} from '../order/OrderItemShipGroupAssoc.js';
import {OrderItemPriceInfoType} from '../order/OrderItemPriceInfo.js';


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
    orderItemContactMeches: {
      type: new GraphQLList(OrderItemContactMechType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemContactMechs/find?orderId=${orderItem.orderId}`)
    },
    orderItemGroupOrders: {
      type: new GraphQLList(OrderItemGroupOrderType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemGroupOrders/find?orderId=${orderItem.orderId}`)
    },
    orderItemPriceInfos: {
      type: new GraphQLList(OrderItemPriceInfoType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemPriceInfos/find?orderId=${orderItem.orderId}`)
    },
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentReceipts/find?orderId=${orderItem.orderId}`)
    },
    workOrderItemFulfillments: {
      type: new GraphQLList(WorkOrderItemFulfillmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`workOrderItemFulfillments/find?orderId=${orderItem.orderId}`)
    },
    productOrderItems: {
      type: new GraphQLList(ProductOrderItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`productOrderItems/find?orderId=${orderItem.orderId}`)
    },
    orderItemAttributes: {
      type: new GraphQLList(OrderItemAttributeType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemAttributes/find?orderId=${orderItem.orderId}`)
    },
    orderRequirementCommitments: {
      type: new GraphQLList(OrderRequirementCommitmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderRequirementCommitments/find?orderId=${orderItem.orderId}`)
    },
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?orderId=${orderItem.orderId}`)
    },
    itemIssuances: {
      type: new GraphQLList(ItemIssuanceType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`itemIssuances/find?orderId=${orderItem.orderId}`)
    },
    giftCardFulfillments: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`giftCardFulfillments/find?orderId=${orderItem.orderId}`)
    },
    orderItemShipGrpInvReses: {
      type: new GraphQLList(OrderItemShipGrpInvResType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGrpInvRess/find?orderId=${orderItem.orderId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?orderId=${orderItem.orderId}`)
    },
    orderItemChanges: {
      type: new GraphQLList(OrderItemChangeType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemChanges/find?orderId=${orderItem.orderId}`)
    },
    orderItemRoles: {
      type: new GraphQLList(OrderItemRoleType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemRoles/find?orderId=${orderItem.orderId}`)
    },
    orderItemBillings: {
      type: new GraphQLList(OrderItemBillingType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemBillings/find?orderId=${orderItem.orderId}`)
    },
    orderItemShipGroupAssocs: {
      type: new GraphQLList(OrderItemShipGroupAssocType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroupAssocs/find?orderId=${orderItem.orderId}`)
    },
    picklistItems: {
      type: new GraphQLList(PicklistItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`picklistItems/find?orderId=${orderItem.orderId}`)
    },
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?orderId=${orderItem.orderId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`fixedAssets/find?orderId=${orderItem.orderId}`)
    }
  })
});

export {OrderItemType};
    




const OrderItemInputType = new GraphQLInputObjectType({
  name: 'OrderItemInputType',
  description: 'input type for OrderItem in order',

  fields: () => ({
    dontCancelSetUserLogin: {type: GraphQLString},
    orderId: {type: GraphQLString},
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
    orderItemTypeId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    unitPrice: {type: GraphQLFloat},
    dontCancelSetDate: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    productId: {type: GraphQLString},
    recurringFreqUomId: {type: GraphQLString},
    unitRecurringPrice: {type: GraphQLFloat},
    orderItemGroupSeqId: {type: GraphQLString},
    isItemGroupPrimary: {type: GraphQLBoolean},
    quoteItemSeqId: {type: GraphQLString},
    autoCancelDate: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    externalId: {type: GraphQLString},
    fromInventoryItemId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    correspondingPoId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    cancelQuantity: {type: GraphQLFloat},
    shipAfterDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    syncStatusId: {type: GraphQLString},
    estimatedShipDate: {type: GraphQLString},
    shoppingListItemSeqId: {type: GraphQLString},
    subscriptionId: {type: GraphQLString},
    changeByUserLoginId: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString}
  })
});

export {OrderItemInputType};
    