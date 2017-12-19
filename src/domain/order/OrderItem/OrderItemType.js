
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
import {OrderItemGroupType} from '../../order/OrderItemGroup/OrderItemGroupType.js';
import {ReturnItemType} from '../../order/ReturnItem/ReturnItemType.js';
import {FinAccountTransType} from '../../accounting/FinAccountTrans/FinAccountTransType.js';
import {QuoteItemType} from '../../order/QuoteItem/QuoteItemType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {ItemIssuanceType} from '../../shipment/ItemIssuance/ItemIssuanceType.js';
import {OrderItemGroupOrderType} from '../../order/OrderItemGroupOrder/OrderItemGroupOrderType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';
import {OrderItemShipGrpInvResType} from '../../order/OrderItemShipGrpInvRes/OrderItemShipGrpInvResType.js';
import {ProductOrderItemType} from '../../order/ProductOrderItem/ProductOrderItemType.js';
import {PicklistItemType} from '../../shipment/PicklistItem/PicklistItemType.js';
import {WorkOrderItemFulfillmentType} from '../../order/WorkOrderItemFulfillment/WorkOrderItemFulfillmentType.js';
import {OrderItemChangeType} from '../../order/OrderItemChange/OrderItemChangeType.js';
import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';
import {OrderItemContactMechType} from '../../order/OrderItemContactMech/OrderItemContactMechType.js';
import {GiftCardFulfillmentType} from '../../accounting/GiftCardFulfillment/GiftCardFulfillmentType.js';
import {SalesOpportunityType} from '../../marketing/SalesOpportunity/SalesOpportunityType.js';
import {OrderItemTypeType} from '../../order/OrderItemType/OrderItemTypeType.js';
import {ShipmentReceiptType} from '../../shipment/ShipmentReceipt/ShipmentReceiptType.js';
import {OrderItemBillingType} from '../../order/OrderItemBilling/OrderItemBillingType.js';
import {OrderItemRoleType} from '../../order/OrderItemRole/OrderItemRoleType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {OrderItemAttributeType} from '../../order/OrderItemAttribute/OrderItemAttributeType.js';
import {OrderRequirementCommitmentType} from '../../order/OrderRequirementCommitment/OrderRequirementCommitmentType.js';
import {OrderItemShipGroupAssocType} from '../../order/OrderItemShipGroupAssoc/OrderItemShipGroupAssocType.js';
import {OrderItemPriceInfoType} from '../../order/OrderItemPriceInfo/OrderItemPriceInfoType.js';


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
    