
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
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${orderItem.dontCancelSetUserLogin}`)
    },
    order: {
      type: OrderItemGroupType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`order/orderItem/orderItemGroups/find?orderId=${orderItem.orderId}`)
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
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`order/orderItem/orderItemTypes/find?orderItemTypeId=${orderItem.orderItemTypeId}`)
    },
    orderItemSeqId: {type: GraphQLString},
    unitPrice: {type: GraphQLFloat},
    dontCancelSetDate: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${orderItem.productId}`)
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
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${orderItem.fromInventoryItemId}`)
    },
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${orderItem.overrideGlAccountId}`)
    },
    budgetItemSeqId: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    correspondingPoId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    quote: {
      type: QuoteItemType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`order/quote/quoteItems/find?quoteId=${orderItem.quoteId}`)
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
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${orderItem.changeByUserLoginId}`)
    },
    prodCatalogId: {type: GraphQLString},
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (orderItem, args, {loaders}) => loaders.ofbiz.load(`marketing/salesOpportunitys/find?salesOpportunityId=${orderItem.salesOpportunityId}`)
    },
    orderItemContactMeches: {
      type: new GraphQLList(OrderItemContactMechType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemContactMechs/find?orderId=${orderItem.orderId}`)
    },
    orderItemGroupOrders: {
      type: new GraphQLList(OrderItemGroupOrderType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemGroupOrders/find?orderId=${orderItem.orderId}`)
    },
    orderItemPriceInfos: {
      type: new GraphQLList(OrderItemPriceInfoType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemPriceInfos/find?orderId=${orderItem.orderId}`)
    },
    shipmentReceipts: {
      type: new GraphQLList(ShipmentReceiptType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentReceipts/find?orderId=${orderItem.orderId}`)
    },
    workOrderItemFulfillments: {
      type: new GraphQLList(WorkOrderItemFulfillmentType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/workOrderItemFulfillments/find?orderId=${orderItem.orderId}`)
    },
    productOrderItems: {
      type: new GraphQLList(ProductOrderItemType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/productOrderItems/find?orderId=${orderItem.orderId}`)
    },
    orderItemAttributes: {
      type: new GraphQLList(OrderItemAttributeType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemAttributes/find?orderId=${orderItem.orderId}`)
    },
    orderRequirementCommitments: {
      type: new GraphQLList(OrderRequirementCommitmentType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/requirement/orderRequirementCommitments/find?orderId=${orderItem.orderId}`)
    },
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTranss/find?orderId=${orderItem.orderId}`)
    },
    itemIssuances: {
      type: new GraphQLList(ItemIssuanceType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/itemIssuances/find?orderId=${orderItem.orderId}`)
    },
    giftCardFulfillments: {
      type: new GraphQLList(GiftCardFulfillmentType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/giftCard/giftCardFulfillments/find?orderId=${orderItem.orderId}`)
    },
    orderItemShipGrpInvReses: {
      type: new GraphQLList(OrderItemShipGrpInvResType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGrpInvRess/find?orderId=${orderItem.orderId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?orderId=${orderItem.orderId}`)
    },
    orderItemChanges: {
      type: new GraphQLList(OrderItemChangeType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemChanges/find?orderId=${orderItem.orderId}`)
    },
    orderItemRoles: {
      type: new GraphQLList(OrderItemRoleType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemRoles/find?orderId=${orderItem.orderId}`)
    },
    orderItemBillings: {
      type: new GraphQLList(OrderItemBillingType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemBillings/find?orderId=${orderItem.orderId}`)
    },
    orderItemShipGroupAssocs: {
      type: new GraphQLList(OrderItemShipGroupAssocType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroupAssocs/find?orderId=${orderItem.orderId}`)
    },
    picklistItems: {
      type: new GraphQLList(PicklistItemType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistItems/find?orderId=${orderItem.orderId}`)
    },
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`order/returnItems/find?orderId=${orderItem.orderId}`)
    },
    fixedAssets: {
      type: new GraphQLList(FixedAssetType),
      args : {},
      resolve: (orderItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/fixedAssets/find?orderId=${orderItem.orderId}`)
    }
  })
});

export {OrderItemType};
    




const OrderItemInputType = new GraphQLInputObjectType({
  name: 'OrderItemInputType',
  description: 'input type for OrderItem',

  fields: () => ({
    autoCancelDate: {type: GraphQLString},
    budgetId: {type: GraphQLString},
    budgetItemSeqId: {type: GraphQLString},
    cancelBackOrderDate: {type: GraphQLString},
    cancelQuantity: {type: GraphQLFloat},
    changeByUserLoginId: {type: GraphQLString},
    comments: {type: GraphQLString},
    correspondingPoId: {type: GraphQLString},
    deploymentId: {type: GraphQLString},
    dontCancelSetDate: {type: GraphQLString},
    dontCancelSetUserLogin: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    estimatedShipDate: {type: GraphQLString},
    externalId: {type: GraphQLString},
    fromInventoryItemId: {type: GraphQLString},
    isItemGroupPrimary: {type: GraphQLBoolean},
    isModifiedPrice: {type: GraphQLBoolean},
    isPromo: {type: GraphQLBoolean},
    itemDescription: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemGroupSeqId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    orderItemTypeId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    quoteId: {type: GraphQLString},
    quoteItemSeqId: {type: GraphQLString},
    recurringFreqUomId: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString},
    selectedAmount: {type: GraphQLFloat},
    shipAfterDate: {type: GraphQLString},
    shipBeforeDate: {type: GraphQLString},
    shoppingListId: {type: GraphQLString},
    shoppingListItemSeqId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    subscriptionId: {type: GraphQLString},
    supplierProductId: {type: GraphQLString},
    syncStatusId: {type: GraphQLString},
    unitAverageCost: {type: GraphQLFloat},
    unitListPrice: {type: GraphQLFloat},
    unitPrice: {type: GraphQLFloat},
    unitRecurringPrice: {type: GraphQLFloat}
  })
});

export {OrderItemInputType};
    