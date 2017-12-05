
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CommunicationEvent} from '../product/CommunicationEvent.js';
import {Subscription} from '../product/Subscription.js';


const SubscriptionCommEvent = new GraphQLObjectType({
  name: 'SubscriptionCommEventType',
  description: 'Type for SubscriptionCommEvent in product',

  fields: () => ({
    communicationEvent: {
      type: CommunicationEventType,
      args : {communicationEventId: {type: GraphQLString}},
      resolve: (subscriptionCommEvent, args, {loaders}) => loaders.ofbizArray.load(`communicationEvents/find?=${args.communicationEventId}`)
    },
    subscription: {
      type: SubscriptionType,
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscriptionCommEvent, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?=${args.subscriptionId}`)
    }
  })
});

export {SubscriptionCommEvent};
    