
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ContentType} from '../content/ContentType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';
import {ProductSubscriptionResourceType} from '../product/ProductSubscriptionResourceType.js';


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
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?subscriptionResourceId=${subscriptionResource.subscriptionResourceId}`)
    },
    subscriptionResource: {
      type: new GraphQLList(SubscriptionResourceType),
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`subscriptionResources/find?subscriptionResourceId=${subscriptionResource.subscriptionResourceId}`)
    },
    productSubscriptionResource: {
      type: new GraphQLList(ProductSubscriptionResourceType),
      args : {subscriptionResourceId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`productSubscriptionResources/find?subscriptionResourceId=${subscriptionResource.subscriptionResourceId}`)
    }
  })
});

export {SubscriptionResourceType};
    