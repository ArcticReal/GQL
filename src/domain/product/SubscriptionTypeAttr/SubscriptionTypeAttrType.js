
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

import {SubscriptionTypeType} from '../../product/SubscriptionType/SubscriptionTypeType.js';


const SubscriptionTypeAttrType = new GraphQLObjectType({
  name: 'SubscriptionTypeAttrType',
  description: 'Type for SubscriptionTypeAttr in product',

  fields: () => ({
    description: {type: GraphQLString},
    subscriptionType: {
      type: SubscriptionTypeType,
      args : {subscriptionTypeId: {type: GraphQLString}},
      resolve: (subscriptionTypeAttr, args, {loaders}) => loaders.ofbiz.load(`product/subscription/subscriptionTypes/find?subscriptionTypeId=${subscriptionTypeAttr.subscriptionTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {SubscriptionTypeAttrType};
    