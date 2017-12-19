
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

import {FinAccountType} from '../../accounting/FinAccount/FinAccountType.js';
import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';


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
    