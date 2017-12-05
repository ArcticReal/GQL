
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderItem} from '../product/OrderItem.js';
import {SubscriptionResource} from '../product/SubscriptionResource.js';
import {SubscriptionType} from '../product/SubscriptionType.js';
import {ContactMech} from '../product/ContactMech.js';
import {ProductCategory} from '../product/ProductCategory.js';
import {Party} from '../product/Party.js';
import {RoleType} from '../product/RoleType.js';
import {NeedType} from '../product/NeedType.js';
import {Product} from '../product/Product.js';
import {InventoryItem} from '../product/InventoryItem.js';
import {RoleType} from '../product/RoleType.js';
import {Party} from '../product/Party.js';


const Subscription = new GraphQLObjectType({
  name: 'SubscriptionType',
  description: 'Type for Subscription in product',

  fields: () => ({
    maxLifeTimeUomId: {type: GraphQLString},
    useTimeUomId: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?=${args.orderId}`)
    },
    subscriptionResource: {
      type: SubscriptionResourceType,
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`subscriptionResources/find?=${args.subscriptionResourceId}`)
    },
    description: {type: GraphQLString},
    subscriptionType: {
      type: SubscriptionTypeType,
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`subscriptionTypes/find?=${args.subscriptionTypeId}`)
    },
    canclAutmExtTimeUomId: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`contactMechs/find?=${args.contactMechId}`)
    },
    gracePeriodOnExpiryUomId: {type: GraphQLString},
    availableTime: {type: GraphQLInt},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`productCategorys/find?=${args.productCategoryId}`)
    },
    partyNeedId: {type: GraphQLString},
    useTime: {type: GraphQLInt},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`partys/find?=${args.partyId}`)
    },
    orderItemSeqId: {type: GraphQLString},
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`roleTypes/find?=${args.roleTypeId}`)
    },
    purchaseFromDate: {type: GraphQLString},
    needType: {
      type: NeedTypeType,
      args : {needTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`needTypes/find?=${args.needTypeId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    useCountLimit: {type: GraphQLInt},
    expirationCompletedDate: {type: GraphQLString},
    availableTimeUomId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`inventoryItems/find?=${args.inventoryItemId}`)
    },
    fromDate: {type: GraphQLString},
    canclAutmExtTime: {type: GraphQLInt},
    originatedFromRoleType: {
      type: RoleTypeType,
      args : {originatedFromRoleTypeId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`roleTypes/find?roleTypeId=${args.originatedFromRoleTypeId}`)
    },
    automaticExtend: {type: GraphQLBoolean},
    originatedFromParty: {
      type: PartyType,
      args : {originatedFromPartyId: {type: GraphQLString}},
      resolve: (subscription, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.originatedFromPartyId}`)
    },
    communicationEventId: {type: GraphQLString},
    maxLifeTime: {type: GraphQLInt},
    purchaseThruDate: {type: GraphQLString},
    externalSubscriptionId: {type: GraphQLString},
    gracePeriodOnExpiry: {type: GraphQLInt},
    subscriptionId: {type: GraphQLString}
  })
});

export {Subscription};
    