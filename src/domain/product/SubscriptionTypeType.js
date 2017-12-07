
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SubscriptionType} from '../product/SubscriptionType.js';
import {SubscriptionTypeAttrType} from '../product/SubscriptionTypeAttrType.js';


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
    subscriptionType: {
      type: new GraphQLList(SubscriptionTypeType),
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`subscriptionTypes/find?subscriptionTypeId=${subscriptionType.subscriptionTypeId}`)
    },
    subscriptionTypeAttr: {
      type: new GraphQLList(SubscriptionTypeAttrType),
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`subscriptionTypeAttrs/find?subscriptionTypeId=${subscriptionType.subscriptionTypeId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?subscriptionTypeId=${subscriptionType.subscriptionTypeId}`)
    }
  })
});

export {SubscriptionTypeType};
    