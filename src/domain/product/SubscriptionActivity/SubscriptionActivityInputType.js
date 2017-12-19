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

const SubscriptionActivityInputType = new GraphQLInputObjectType({
  name: 'SubscriptionActivityInputType',
  description: 'input type for SubscriptionActivity',

  fields: () => ({
    comments: {type: GraphQLString},
    dateSent: {type: GraphQLString},
    subscriptionActivityId: {type: GraphQLString}
  })
});

export {SubscriptionActivityInputType};
    