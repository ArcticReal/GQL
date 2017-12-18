
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

import {FinAccountType} from '../accounting/FinAccount.js';
import {PartyRoleType} from '../party/PartyRole.js';


const FinAccountRoleType = new GraphQLObjectType({
  name: 'FinAccountRoleType',
  description: 'Type for FinAccountRole in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccountRole, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccounts/find?finAccountId=${finAccountRole.finAccountId}`)
    },
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (finAccountRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${finAccountRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FinAccountRoleType};
    




const FinAccountRoleInputType = new GraphQLInputObjectType({
  name: 'FinAccountRoleInputType',
  description: 'input type for FinAccountRole',

  fields: () => ({
    finAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FinAccountRoleInputType};
    