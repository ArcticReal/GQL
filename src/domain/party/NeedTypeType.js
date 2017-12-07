
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyNeedType} from '../party/PartyNeedType.js';
import {SubscriptionType} from '../product/SubscriptionType.js';


const NeedTypeType = new GraphQLObjectType({
  name: 'NeedTypeType',
  description: 'Type for NeedType in party',

  fields: () => ({
    needTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    partyNeed: {
      type: new GraphQLList(PartyNeedType),
      args : {needTypeId: {type: GraphQLString}},
      resolve: (needType, args, {loaders}) => loaders.ofbizArray.load(`partyNeeds/find?needTypeId=${needType.needTypeId}`)
    },
    subscription: {
      type: new GraphQLList(SubscriptionType),
      args : {needTypeId: {type: GraphQLString}},
      resolve: (needType, args, {loaders}) => loaders.ofbizArray.load(`subscriptions/find?needTypeId=${needType.needTypeId}`)
    }
  })
});

export {NeedTypeType};
    