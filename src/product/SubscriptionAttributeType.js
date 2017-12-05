
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Subscription} from '../product/Subscription.js';


const SubscriptionAttribute = new GraphQLObjectType({
  name: 'SubscriptionAttributeType',
  description: 'Type for SubscriptionAttribute in product',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    subscription: {
      type: SubscriptionType,
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscriptionAttribute, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?=${args.subscriptionId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {SubscriptionAttribute};
    