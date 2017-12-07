
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FinAccountType} from '../accounting/FinAccountType.js';
import {PartyRoleType} from '../party/PartyRoleType.js';


const FinAccountRoleType = new GraphQLObjectType({
  name: 'FinAccountRoleType',
  description: 'Type for FinAccountRole in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccountRole, args, {loaders}) => loaders.ofbiz.load(`finAccounts/find?finAccountId=${finAccountRole.finAccountId}`)
    },
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (finAccountRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${finAccountRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FinAccountRoleType};
    