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
    