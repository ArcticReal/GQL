
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SubscriptionTypeType} from '../product/SubscriptionTypeType.js';


const SubscriptionTypeAttrType = new GraphQLObjectType({
  name: 'SubscriptionTypeAttrType',
  description: 'Type for SubscriptionTypeAttr in product',

  fields: () => ({
    description: {type: GraphQLString},
    subscriptionType: {
      type: SubscriptionTypeType,
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscriptionTypeAttr, args, {loaders}) => loaders.ofbiz.load(`subscriptionTypes/find?subscriptionTypeId=${subscriptionTypeAttr.subscriptionTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {SubscriptionTypeAttrType};
    