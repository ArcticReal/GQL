
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SubscriptionActivity} from '../product/SubscriptionActivity.js';
import {Subscription} from '../product/Subscription.js';


const SubscriptionFulfillmentPiece = new GraphQLObjectType({
  name: 'SubscriptionFulfillmentPieceType',
  description: 'Type for SubscriptionFulfillmentPiece in product',

  fields: () => ({
    subscriptionActivity: {
      type: SubscriptionActivityType,
      args : {subscriptionActivityId: {type: GraphQLString}},
      resolve: (subscriptionFulfillmentPiece, args, {loaders}) => loaders.ofbizArray.load(`subscriptionActivitys/find?=${args.subscriptionActivityId}`)
    },
    subscription: {
      type: SubscriptionType,
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscriptionFulfillmentPiece, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?=${args.subscriptionId}`)
    }
  })
});

export {SubscriptionFulfillmentPiece};
    