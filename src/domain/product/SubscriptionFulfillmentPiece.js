
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

import {SubscriptionActivityType} from '../product/SubscriptionActivity.js';
import {SubscriptionType} from '../product/Subscription.js';


const SubscriptionFulfillmentPieceType = new GraphQLObjectType({
  name: 'SubscriptionFulfillmentPieceType',
  description: 'Type for SubscriptionFulfillmentPiece in product',

  fields: () => ({
    subscriptionActivity: {
      type: SubscriptionActivityType,
      args : {subscriptionActivityId: {type: GraphQLString}},
      resolve: (subscriptionFulfillmentPiece, args, {loaders}) => loaders.ofbiz.load(`subscriptionActivitys/find?subscriptionActivityId=${subscriptionFulfillmentPiece.subscriptionActivityId}`)
    },
    subscription: {
      type: SubscriptionType,
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscriptionFulfillmentPiece, args, {loaders}) => loaders.ofbiz.load(`subscriptions/find?subscriptionId=${subscriptionFulfillmentPiece.subscriptionId}`)
    }
  })
});

export {SubscriptionFulfillmentPieceType};
    




const SubscriptionFulfillmentPieceInputType = new GraphQLInputObjectType({
  name: 'SubscriptionFulfillmentPieceInputType',
  description: 'input type for SubscriptionFulfillmentPiece in product',

  fields: () => ({
    subscriptionActivityId: {type: GraphQLString},
    subscriptionId: {type: GraphQLString}
  })
});

export {SubscriptionFulfillmentPieceInputType};
    