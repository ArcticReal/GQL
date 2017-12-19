
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

import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';
import {SubscriptionTypeAttrType} from '../../product/SubscriptionTypeAttr/SubscriptionTypeAttrType.js';


const SubscriptionTypeType = new GraphQLObjectType({
  name: 'SubscriptionTypeType',
  description: 'Type for SubscriptionType in product',

  fields: () => ({
    parentType: {
      type: SubscriptionTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbiz.load(`product/subscription/subscriptionTypes/find?subscriptionTypeId=${subscriptionType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    subscriptionTypeId: {type: GraphQLString},
    subscriptionTypes: {
      type: new GraphQLList(SubscriptionTypeType),
      args : {},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`product/subscription/subscriptionTypes/find?subscriptionTypeId=${subscriptionType.subscriptionTypeId}`)
    },
    subscriptionTypeAttrs: {
      type: new GraphQLList(SubscriptionTypeAttrType),
      args : {},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`product/subscription/subscriptionTypeAttrs/find?subscriptionTypeId=${subscriptionType.subscriptionTypeId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?subscriptionTypeId=${subscriptionType.subscriptionTypeId}`)
    }
  })
});

export {SubscriptionTypeType};
    