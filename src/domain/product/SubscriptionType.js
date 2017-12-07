
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
import {NeedTypeType} from '../party/NeedTypeType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {ProductType} from '../product/ProductType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {SubscriptionTypeType} from '../product/SubscriptionTypeType.js';
import {SubscriptionResourceType} from '../product/SubscriptionResourceType.js';
import {PartyType} from '../party/PartyType.js';
import {SubscriptionAttributeType} from '../product/SubscriptionAttributeType.js';
import {SubscriptionCommEventType} from '../product/SubscriptionCommEventType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {ProductCategoryType} from '../product/ProductCategoryType.js';
import {SubscriptionFulfillmentPieceType} from '../product/SubscriptionFulfillmentPieceType.js';


const SubscriptionType = new GraphQLObjectType({
  name: 'SubscriptionType',
  description: 'Type for Subscription in product',

  fields: () => ({
    maxLifeTimeUomId: {type: GraphQLString},
    useTimeUomId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${subscription.orderId}`)
    },
    subscriptionResource: {
      type: SubscriptionResourceType,
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`subscriptionResources/find?subscriptionResourceId=${subscription.subscriptionResourceId}`)
    },
    description: {type: GraphQLString},
    subscriptionType: {
      type: SubscriptionTypeType,
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`subscriptionTypes/find?subscriptionTypeId=${subscription.subscriptionTypeId}`)
    },
    canclAutmExtTimeUomId: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${subscription.contactMechId}`)
    },
    gracePeriodOnExpiryUomId: {type: GraphQLString},
    availableTime: {type: GraphQLInt},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${subscription.productCategoryId}`)
    },
    partyNeedId: {type: GraphQLString},
    useTime: {type: GraphQLInt},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${subscription.partyId}`)
    },
    orderItemSeqId: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${subscription.roleTypeId}`)
    },
    purchaseFromDate: {type: GraphQLString},
    needType: {
      type: NeedTypeType,
      args : {needTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`needTypes/find?needTypeId=${subscription.needTypeId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${subscription.productId}`)
    },
    useCountLimit: {type: GraphQLInt},
    expirationCompletedDate: {type: GraphQLString},
    availableTimeUomId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${subscription.inventoryItemId}`)
    },
    fromDate: {type: GraphQLString},
    canclAutmExtTime: {type: GraphQLInt},
    originatedFromRoleType: {
      type: RoleTypeType,
      args : {originatedFromRoleTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${subscription.originatedFromRoleTypeId}`)
    },
    automaticExtend: {type: GraphQLBoolean},
    originatedFromParty: {
      type: PartyType,
      args : {originatedFromPartyId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${subscription.originatedFromPartyId}`)
    },
    communicationEventId: {type: GraphQLString},
    maxLifeTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    externalSubscriptionId: {type: GraphQLString},
    gracePeriodOnExpiry: {type: GraphQLInt},
    subscriptionId: {type: GraphQLString},
    subscriptionAttribute: {
      type: new GraphQLList(SubscriptionAttributeType),
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`subscriptionAttributes/find?subscriptionId=${subscription.subscriptionId}`)
    },
    subscriptionFulfillmentPiece: {
      type: new GraphQLList(SubscriptionFulfillmentPieceType),
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`subscriptionFulfillmentPieces/find?subscriptionId=${subscription.subscriptionId}`)
    },
    subscriptionCommEvent: {
      type: new GraphQLList(SubscriptionCommEventType),
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`subscriptionCommEvents/find?subscriptionId=${subscription.subscriptionId}`)
    }
  })
});

export {SubscriptionType};
    