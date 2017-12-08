
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

import {SubscriptionFulfillmentPieceType} from '../product/SubscriptionFulfillmentPiece.js';


const SubscriptionActivityType = new GraphQLObjectType({
  name: 'SubscriptionActivityType',
  description: 'Type for SubscriptionActivity in product',

  fields: () => ({
    comments: {type: GraphQLString},
    subscriptionActivityId: {type: GraphQLString},
    dateSent: {type: GraphQLString},
    subscriptionFulfillmentPieces: {
      type: new GraphQLList(SubscriptionFulfillmentPieceType),
      args : {subscriptionActivityId: {type: GraphQLString}},
      resolve: (subscriptionActivity, args, {loaders}) => loaders.ofbizArray.load(`subscriptionFulfillmentPieces/find?subscriptionActivityId=${subscriptionActivity.subscriptionActivityId}`)
    }
  })
});

export {SubscriptionActivityType};
    




const SubscriptionActivityInputType = new GraphQLInputObjectType({
  name: 'SubscriptionActivityInputType',
  description: 'input type for SubscriptionActivity in product',

  fields: () => ({
    comments: {type: GraphQLString},
    subscriptionActivityId: {type: GraphQLString},
    dateSent: {type: GraphQLString}
  })
});

export {SubscriptionActivityInputType};
    