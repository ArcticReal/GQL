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

const SubscriptionCommEventInputType = new GraphQLInputObjectType({
  name: 'SubscriptionCommEventInputType',
  description: 'input type for SubscriptionCommEvent',

  fields: () => ({
    communicationEventId: {type: GraphQLString},
    subscriptionId: {type: GraphQLString}
  })
});

export {SubscriptionCommEventInputType};
    