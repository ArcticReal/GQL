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

const SubscriptionResourceInputType = new GraphQLInputObjectType({
  name: 'SubscriptionResourceInputType',
  description: 'input type for SubscriptionResource',

  fields: () => ({
    contentId: {type: GraphQLString},
    description: {type: GraphQLString},
    parentResourceId: {type: GraphQLString},
    serviceNameOnExpiry: {type: GraphQLString},
    subscriptionResourceId: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {SubscriptionResourceInputType};
    