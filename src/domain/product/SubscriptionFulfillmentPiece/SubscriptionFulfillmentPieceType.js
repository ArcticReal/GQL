
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

import {SubscriptionActivityType} from '../../product/SubscriptionActivity/SubscriptionActivityType.js';
import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';


const SubscriptionFulfillmentPieceType = new GraphQLObjectType({
  name: 'SubscriptionFulfillmentPieceType',
  description: 'Type for SubscriptionFulfillmentPiece in product',

  fields: () => ({
    subscriptionActivity: {
      type: SubscriptionActivityType,
      args : {subscriptionActivityId: {type: GraphQLString}},
      resolve: (subscriptionFulfillmentPiece, args, {loaders}) => loaders.ofbiz.load(`product/subscription/subscriptionActivitys/find?subscriptionActivityId=${subscriptionFulfillmentPiece.subscriptionActivityId}`)
    },
    subscription: {
      type: SubscriptionType,
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscriptionFulfillmentPiece, args, {loaders}) => loaders.ofbiz.load(`product/subscriptions/find?subscriptionId=${subscriptionFulfillmentPiece.subscriptionId}`)
    }
  })
});

export {SubscriptionFulfillmentPieceType};
    