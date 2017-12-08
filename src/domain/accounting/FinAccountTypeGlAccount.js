
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

import {PartyType} from '../party/Party.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {FinAccountTypeType} from '../accounting/FinAccountType.js';


const FinAccountTypeGlAccountType = new GraphQLObjectType({
  name: 'FinAccountTypeGlAccountType',
  description: 'Type for FinAccountTypeGlAccount in accounting',

  fields: () => ({
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (finAccountTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${finAccountTypeGlAccount.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (finAccountTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${finAccountTypeGlAccount.organizationPartyId}`)
    },
    finAccountType: {
      type: FinAccountTypeType,
      args : {finAccountTypeId: {type: GraphQLString}},
      resolve: (finAccountTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`finAccountTypes/find?finAccountTypeId=${finAccountTypeGlAccount.finAccountTypeId}`)
    }
  })
});

export {FinAccountTypeGlAccountType};
    




const FinAccountTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'FinAccountTypeGlAccountInputType',
  description: 'input type for FinAccountTypeGlAccount in accounting',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString}
  })
});

export {FinAccountTypeGlAccountInputType};
    