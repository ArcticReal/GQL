
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

import {SubscriptionFulfillmentPieceType} from '../../product/SubscriptionFulfillmentPiece/SubscriptionFulfillmentPieceType.js';


const SubscriptionActivityType = new GraphQLObjectType({
  name: 'SubscriptionActivityType',
  description: 'Type for SubscriptionActivity in product',

  fields: () => ({
    comments: {type: GraphQLString},
    subscriptionActivityId: {type: GraphQLString},
    dateSent: {type: GraphQLString},
    subscriptionFulfillmentPieces: {
      type: new GraphQLList(SubscriptionFulfillmentPieceType),
      args : {},
      resolve: (subscriptionActivity, args, {loaders}) => loaders.ofbizArray.load(`product/subscription/subscriptionFulfillmentPieces/find?subscriptionActivityId=${subscriptionActivity.subscriptionActivityId}`)
    }
  })
});

export {SubscriptionActivityType};
    