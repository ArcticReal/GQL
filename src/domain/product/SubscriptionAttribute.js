
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

import {SubscriptionType} from '../product/Subscription.js';


const SubscriptionAttributeType = new GraphQLObjectType({
  name: 'SubscriptionAttributeType',
  description: 'Type for SubscriptionAttribute in product',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    subscription: {
      type: SubscriptionType,
      args : {subscriptionId: {type: GraphQLString}},
      resolve: (subscriptionAttribute, args, {loaders}) => loaders.ofbiz.load(`product/subscriptions/find?subscriptionId=${subscriptionAttribute.subscriptionId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {SubscriptionAttributeType};
    




const SubscriptionAttributeInputType = new GraphQLInputObjectType({
  name: 'SubscriptionAttributeInputType',
  description: 'input type for SubscriptionAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    subscriptionId: {type: GraphQLString}
  })
});

export {SubscriptionAttributeInputType};
    