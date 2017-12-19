
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

import {PartyNeedType} from '../../party/PartyNeed/PartyNeedType.js';
import {SubscriptionType} from '../../product/Subscription/SubscriptionType.js';


const NeedTypeType = new GraphQLObjectType({
  name: 'NeedTypeType',
  description: 'Type for NeedType in party',

  fields: () => ({
    needTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyNeeds: {
      type: new GraphQLList(PartyNeedType),
      args : {},
      resolve: (needType, args, {loaders}) => loaders.ofbizArray.load(`party/party/partyNeeds/find?needTypeId=${needType.needTypeId}`)
    },
    subscriptions: {
      type: new GraphQLList(SubscriptionType),
      args : {},
      resolve: (needType, args, {loaders}) => loaders.ofbizArray.load(`product/subscriptions/find?needTypeId=${needType.needTypeId}`)
    }
  })
});

export {NeedTypeType};
    