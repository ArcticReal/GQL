
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SubscriptionActivityType} from '../product/SubscriptionActivityType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';


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
    