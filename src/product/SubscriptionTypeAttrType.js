
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


const SubscriptionTypeAttr = new GraphQLObjectType({
  name: 'SubscriptionTypeAttrType',
  description: 'Type for SubscriptionTypeAttr in product',

  fields: () => ({
    description: {type: GraphQLString},
    subscriptionType: {
      type: SubscriptionTypeType,
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscriptionTypeAttr, args, {loaders}) => loaders.ofbizArray.load(`subscriptionTypes/find?=${args.subscriptionTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {SubscriptionTypeAttr};
    