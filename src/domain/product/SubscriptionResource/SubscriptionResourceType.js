
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

import {ContentType} from '../../content/Content/ContentType.js';
import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';
import {ProductSubscriptionResourceType} from '../../product/ProductSubscriptionResource/ProductSubscriptionResourceType.js';


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
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbiz.load(`product/subscription/subscriptionResources/find?subscriptionResourceId=${subscriptionResource.parentResourceId}`)
    },
    webSiteId: {type: GraphQLString},
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?subscriptionResourceId=${subscriptionResource.subscriptionResourceId}`)
    },
    subscriptionResources: {
      type: new GraphQLList(SubscriptionResourceType),
      args : {},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`product/subscription/subscriptionResources/find?subscriptionResourceId=${subscriptionResource.subscriptionResourceId}`)
    },
    productSubscriptionResources: {
      type: new GraphQLList(ProductSubscriptionResourceType),
      args : {},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`product/product/productSubscriptionResources/find?subscriptionResourceId=${subscriptionResource.subscriptionResourceId}`)
    }
  })
});

export {SubscriptionResourceType};
    