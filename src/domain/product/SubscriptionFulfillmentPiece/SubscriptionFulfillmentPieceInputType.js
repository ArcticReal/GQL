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

const SubscriptionFulfillmentPieceInputType = new GraphQLInputObjectType({
  name: 'SubscriptionFulfillmentPieceInputType',
  description: 'input type for SubscriptionFulfillmentPiece',

  fields: () => ({
    subscriptionActivityId: {type: GraphQLString},
    subscriptionId: {type: GraphQLString}
  })
});

export {SubscriptionFulfillmentPieceInputType};
    