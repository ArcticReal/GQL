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

const SubscriptionCommEventResponseType = new GraphQLObjectType({
  name: 'SubscriptionCommEventResponseType',
  description: 'response type for SubscriptionCommEvent',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    subscriptionId: {type: GraphQLString}
  })
});

export {SubscriptionCommEventResponseType};
    