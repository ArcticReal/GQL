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

const SubscriptionActivityResponseType = new GraphQLObjectType({
  name: 'SubscriptionActivityResponseType',
  description: 'response type for SubscriptionActivity',

  fields: () => ({
    comments: {type: GraphQLString},
    dateSent: {type: GraphQLString},
    subscriptionActivityId: {type: GraphQLString}
  })
});

export {SubscriptionActivityResponseType};
    