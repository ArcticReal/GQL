
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

import {PartyType} from '../../party/Party/PartyType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {FinAccountTypeType} from '../../accounting/FinAccountType/FinAccountTypeType.js';


const FinAccountTypeGlAccountType = new GraphQLObjectType({
  name: 'FinAccountTypeGlAccountType',
  description: 'Type for FinAccountTypeGlAccount in accounting',

  fields: () => ({
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (finAccountTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${finAccountTypeGlAccount.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (finAccountTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${finAccountTypeGlAccount.organizationPartyId}`)
    },
    finAccountType: {
      type: FinAccountTypeType,
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTypes/find?finAccountTypeId=${finAccountTypeGlAccount.finAccountTypeId}`)
    }
  })
});

export {FinAccountTypeGlAccountType};
    