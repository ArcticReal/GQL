
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SubscriptionType} from '../product/SubscriptionType.js';


const SubscriptionAttributeType = new GraphQLObjectType({
  name: 'SubscriptionAttributeType',
  description: 'Type for SubscriptionAttribute in product',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    subscription: {
      type: SubscriptionType,
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscriptionAttribute, args, {loaders}) => loaders.ofbiz.load(`subscriptions/find?subscriptionId=${subscriptionAttribute.subscriptionId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {SubscriptionAttributeType};
    