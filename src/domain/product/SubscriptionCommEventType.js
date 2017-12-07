
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommunicationEventType} from '../party/CommunicationEventType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';


const SubscriptionCommEventType = new GraphQLObjectType({
  name: 'SubscriptionCommEventType',
  description: 'Type for SubscriptionCommEvent in product',

  fields: () => ({
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (subscriptionCommEvent, args, {loaders}) => loaders.ofbiz.load(`communicationEvents/find?communicationEventId=${subscriptionCommEvent.communicationEventId}`)
    },
    subscription: {
      type: SubscriptionType,
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscriptionCommEvent, args, {loaders}) => loaders.ofbiz.load(`subscriptions/find?subscriptionId=${subscriptionCommEvent.subscriptionId}`)
    }
  })
});

export {SubscriptionCommEventType};
    