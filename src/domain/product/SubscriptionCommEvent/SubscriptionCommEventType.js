
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

import {CommunicationEventType} from '../../party/CommunicationEvent/CommunicationEventType.js';
import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';


const SubscriptionCommEventType = new GraphQLObjectType({
  name: 'SubscriptionCommEventType',
  description: 'Type for SubscriptionCommEvent in product',

  fields: () => ({
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (subscriptionCommEvent, args, {loaders}) => loaders.ofbiz.load(`party/communicationEvents/find?communicationEventId=${subscriptionCommEvent.communicationEventId}`)
    },
    subscription: {
      type: SubscriptionType,
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscriptionCommEvent, args, {loaders}) => loaders.ofbiz.load(`product/subscriptions/find?subscriptionId=${subscriptionCommEvent.subscriptionId}`)
    }
  })
});

export {SubscriptionCommEventType};
    