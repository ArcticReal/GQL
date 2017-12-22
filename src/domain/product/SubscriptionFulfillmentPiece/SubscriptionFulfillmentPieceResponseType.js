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

const SubscriptionFulfillmentPieceResponseType = new GraphQLObjectType({
  name: 'SubscriptionFulfillmentPieceResponseType',
  description: 'response type for SubscriptionFulfillmentPiece',

  fields: () => ({
    subscriptionActivityId: {type: GraphQLString},
    subscriptionId: {type: GraphQLString}
  })
});

export {SubscriptionFulfillmentPieceResponseType};
    