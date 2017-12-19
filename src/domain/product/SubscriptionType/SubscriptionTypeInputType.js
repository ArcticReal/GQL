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

const SubscriptionTypeInputType = new GraphQLInputObjectType({
  name: 'SubscriptionTypeInputType',
  description: 'input type for SubscriptionType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    subscriptionTypeId: {type: GraphQLString}
  })
});

export {SubscriptionTypeInputType};
    