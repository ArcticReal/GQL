
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
import {AcctgTransEntryType} from '../accounting/AcctgTransEntry.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const GlAccountOrganizationType = new GraphQLObjectType({
  name: 'GlAccountOrganizationType',
  description: 'Type for GlAccountOrganization in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountOrganization, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${glAccountOrganization.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (glAccountOrganization, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${glAccountOrganization.organizationPartyId}`)
    },
    thruDate: {type: GraphQLString},
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountOrganization, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?glAccountId=${glAccountOrganization.glAccountId}`)
    }
  })
});

export {GlAccountOrganizationType};
    




const GlAccountOrganizationInputType = new GraphQLInputObjectType({
  name: 'GlAccountOrganizationInputType',
  description: 'input type for GlAccountOrganization in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountOrganizationInputType};
    