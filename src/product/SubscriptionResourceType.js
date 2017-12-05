
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Content} from '../product/Content.js';
import {SubscriptionResource} from '../product/SubscriptionResource.js';
import {WebSite} from '../product/WebSite.js';


const SubscriptionResource = new GraphQLObjectType({
  name: 'SubscriptionResourceType',
  description: 'Type for SubscriptionResource in product',

  fields: () => ({
    serviceNameOnExpiry: {type: GraphQLString},
    subscriptionResourceId: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`contents/find?=${args.contentId}`)
    },
    description: {type: GraphQLString},
    parentResource: {
      type: SubscriptionResourceType,
      args : {parentResourceId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`subscriptionResources/find?subscriptionResourceId=${args.parentResourceId}`)
    },
    webSite: {
      type: WebSiteType,
      args : {webSiteId: {type: GraphQLString}},
      resolve: (subscriptionResource, args, {loaders}) => loaders.ofbizArray.load(`webSites/find?=${args.webSiteId}`)
    }
  })
});

export {SubscriptionResource};
    