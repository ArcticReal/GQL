
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


const SubscriptionType = new GraphQLObjectType({
  name: 'SubscriptionTypeType',
  description: 'Type for SubscriptionType in product',

  fields: () => ({
    parentType: {
      type: SubscriptionTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (subscriptionType, args, {loaders}) => loaders.ofbizArray.load(`subscriptionTypes/find?subscriptionTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    subscriptionTypeId: {type: GraphQLString}
  })
});

export {SubscriptionType};
    