
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

import {GlAccountTypeType} from '../../accounting/GlAccountType/GlAccountTypeType.js';
import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';


const PartyGlAccountType = new GraphQLObjectType({
  name: 'PartyGlAccountType',
  description: 'Type for PartyGlAccount in accounting',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (partyGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${partyGlAccount.glAccountTypeId}`)
    },
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (partyGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${partyGlAccount.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (partyGlAccount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyGlAccount.organizationPartyId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyGlAccount, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${partyGlAccount.partyId}`)
    }
  })
});

export {PartyGlAccountType};
    