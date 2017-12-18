
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
import {NeedTypeType} from '../party/NeedType.js';
import {RoleTypeType} from '../party/RoleType.js';
import {ProductType} from '../product/Product.js';
import {ContactMechType} from '../party/ContactMech.js';
import {SubscriptionTypeType} from '../product/SubscriptionType.js';
import {SubscriptionResourceType} from '../product/SubscriptionResource.js';
import {PartyType} from '../party/Party.js';
import {SubscriptionAttributeType} from '../product/SubscriptionAttribute.js';
import {SubscriptionCommEventType} from '../product/SubscriptionCommEvent.js';
import {OrderItemType} from '../order/OrderItem.js';
import {ProductCategoryType} from '../product/ProductCategory.js';
import {SubscriptionFulfillmentPieceType} from '../product/SubscriptionFulfillmentPiece.js';


const SubscriptionType = new GraphQLObjectType({
  name: 'SubscriptionType',
  description: 'Type for Subscription in product',

  fields: () => ({
    maxLifeTimeUomId: {type: GraphQLString},
    useTimeUomId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${subscription.orderId}`)
    },
    subscriptionResource: {
      type: SubscriptionResourceType,
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`product/subscription/subscriptionResources/find?subscriptionResourceId=${subscription.subscriptionResourceId}`)
    },
    description: {type: GraphQLString},
    subscriptionType: {
      type: SubscriptionTypeType,
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`product/subscription/subscriptionTypes/find?subscriptionTypeId=${subscription.subscriptionTypeId}`)
    },
    canclAutmExtTimeUomId: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${subscription.contactMechId}`)
    },
    gracePeriodOnExpiryUomId: {type: GraphQLString},
    availableTime: {type: GraphQLInt},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${subscription.productCategoryId}`)
    },
    partyNeedId: {type: GraphQLString},
    useTime: {type: GraphQLInt},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${subscription.partyId}`)
    },
    orderItemSeqId: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${subscription.roleTypeId}`)
    },
    purchaseFromDate: {type: GraphQLString},
    needType: {
      type: NeedTypeType,
      args : {needTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`party/needTypes/find?needTypeId=${subscription.needTypeId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${subscription.productId}`)
    },
    useCountLimit: {type: GraphQLInt},
    expirationCompletedDate: {type: GraphQLString},
    availableTimeUomId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${subscription.inventoryItemId}`)
    },
    fromDate: {type: GraphQLString},
    canclAutmExtTime: {type: GraphQLInt},
    originatedFromRoleType: {
      type: RoleTypeType,
      args : {originatedFromRoleTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${subscription.originatedFromRoleTypeId}`)
    },
    automaticExtend: {type: GraphQLBoolean},
    originatedFromParty: {
      type: PartyType,
      args : {originatedFromPartyId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${subscription.originatedFromPartyId}`)
    },
    communicationEventId: {type: GraphQLString},
    maxLifeTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    externalSubscriptionId: {type: GraphQLString},
    gracePeriodOnExpiry: {type: GraphQLInt},
    subscriptionId: {type: GraphQLString},
    subscriptionAttributes: {
      type: new GraphQLList(SubscriptionAttributeType),
      args : {},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`product/subscription/subscriptionAttributes/find?subscriptionId=${subscription.subscriptionId}`)
    },
    subscriptionFulfillmentPieces: {
      type: new GraphQLList(SubscriptionFulfillmentPieceType),
      args : {},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`product/subscription/subscriptionFulfillmentPieces/find?subscriptionId=${subscription.subscriptionId}`)
    },
    subscriptionCommEvents: {
      type: new GraphQLList(SubscriptionCommEventType),
      args : {},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`product/subscription/subscriptionCommEvents/find?subscriptionId=${subscription.subscriptionId}`)
    }
  })
});

export {SubscriptionType};
    




const SubscriptionInputType = new GraphQLInputObjectType({
  name: 'SubscriptionInputType',
  description: 'input type for Subscription',

  fields: () => ({
    automaticExtend: {type: GraphQLBoolean},
    availableTime: {type: GraphQLInt},
    availableTimeUomId: {type: GraphQLString},
    canclAutmExtTime: {type: GraphQLInt},
    canclAutmExtTimeUomId: {type: GraphQLString},
    communicationEventId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    description: {type: GraphQLString},
    expirationCompletedDate: {type: GraphQLString},
    externalSubscriptionId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    gracePeriodOnExpiry: {type: GraphQLInt},
    gracePeriodOnExpiryUomId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    maxLifeTime: {type: GraphQLInt},
    maxLifeTimeUomId: {type: GraphQLString},
    needTypeId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    originatedFromPartyId: {type: GraphQLString},
    originatedFromRoleTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyNeedId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    purchaseFromDate: {type: GraphQLString},
    purchaseThruDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    subscriptionId: {type: GraphQLString},
    subscriptionResourceId: {type: GraphQLString},
    subscriptionTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    useCountLimit: {type: GraphQLInt},
    useTime: {type: GraphQLInt},
    useTimeUomId: {type: GraphQLString}
  })
});

export {SubscriptionInputType};
    