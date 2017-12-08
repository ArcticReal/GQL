
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

import {ContentType} from '../content/Content.js';
import {SubscriptionType} from '../product/Subscription.js';
import {ProductSubscriptionResourceType} from '../product/ProductSubscriptionResource.js';


const SubscriptionResourceType = new GraphQLObjectType({
  name: 'SubscriptionResourceType',
  description: 'Type for SubscriptionResource in product',

  fields: () => ({
    serviceNameOnExpiry: {type: GraphQLString},
    subscriptionResourceId: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${subscriptionResource.contentId}`)
    },
    description: {type: GraphQLString},
    parentResource: {
      type: SubscriptionResourceType,
      args : {parentResourceId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbiz.load(`subscriptionResources/find?subscriptionResourceId=${subscriptionResource.parentResourceId}`)
    },
    webSiteId: {type: GraphQLString},
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?subscriptionResourceId=${subscriptionResource.subscriptionResourceId}`)
    },
    subscriptionResources: {
      type: new GraphQLList(SubscriptionResourceType),
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`subscriptionResources/find?subscriptionResourceId=${subscriptionResource.subscriptionResourceId}`)
    },
    productSubscriptionResources: {
      type: new GraphQLList(ProductSubscriptionResourceType),
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`productSubscriptionResources/find?subscriptionResourceId=${subscriptionResource.subscriptionResourceId}`)
    }
  })
});

export {SubscriptionResourceType};
    




const SubscriptionResourceInputType = new GraphQLInputObjectType({
  name: 'SubscriptionResourceInputType',
  description: 'input type for SubscriptionResource in product',

  fields: () => ({
    serviceNameOnExpiry: {type: GraphQLString},
    subscriptionResourceId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    description: {type: GraphQLString},
    parentResourceId: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {SubscriptionResourceInputType};
    