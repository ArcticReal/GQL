
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

import {SubscriptionType} from '../product/Subscription.js';
import {SubscriptionTypeAttrType} from '../product/SubscriptionTypeAttr.js';


const SubscriptionTypeType = new GraphQLObjectType({
  name: 'SubscriptionTypeType',
  description: 'Type for SubscriptionType in product',

  fields: () => ({
    parentType: {
      type: SubscriptionTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbiz.load(`subscriptionTypes/find?subscriptionTypeId=${subscriptionType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    subscriptionTypeId: {type: GraphQLString},
    subscriptionTypes: {
      type: new GraphQLList(SubscriptionTypeType),
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`subscriptionTypes/find?subscriptionTypeId=${subscriptionType.subscriptionTypeId}`)
    },
    subscriptionTypeAttrs: {
      type: new GraphQLList(SubscriptionTypeAttrType),
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`subscriptionTypeAttrs/find?subscriptionTypeId=${subscriptionType.subscriptionTypeId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?subscriptionTypeId=${subscriptionType.subscriptionTypeId}`)
    }
  })
});

export {SubscriptionTypeType};
    




const SubscriptionTypeInputType = new GraphQLInputObjectType({
  name: 'SubscriptionTypeInputType',
  description: 'input type for SubscriptionType in product',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    subscriptionTypeId: {type: GraphQLString}
  })
});

export {SubscriptionTypeInputType};
    