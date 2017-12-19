
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
import {AcctgTransEntryType} from '../../accounting/AcctgTransEntry/AcctgTransEntryType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';


const GlAccountOrganizationType = new GraphQLObjectType({
  name: 'GlAccountOrganizationType',
  description: 'Type for GlAccountOrganization in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glAccountOrganization, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${glAccountOrganization.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (glAccountOrganization, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${glAccountOrganization.organizationPartyId}`)
    },
    thruDate: {type: GraphQLString},
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {},
      resolve: (glAccountOrganization, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntrys/find?glAccountId=${glAccountOrganization.glAccountId}`)
    }
  })
});

export {GlAccountOrganizationType};
    