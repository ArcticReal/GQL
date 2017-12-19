
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
import {FinAccountTransType} from '../../accounting/FinAccountTrans/FinAccountTransType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {GlReconciliationEntryType} from '../../accounting/GlReconciliationEntry/GlReconciliationEntryType.js';


const GlReconciliationType = new GraphQLObjectType({
  name: 'GlReconciliationType',
  description: 'Type for GlReconciliation in accounting',

  fields: () => ({
    lastModifiedDate: {type: GraphQLString},
    glReconciliationId: {type: GraphQLString},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glReconciliation, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${glReconciliation.glAccountId}`)
    },
    glReconciliationName: {type: GraphQLString},
    description: {type: GraphQLString},
    reconciledDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    reconciledBalance: {type: GraphQLFloat},
    statusId: {type: GraphQLString},
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (glReconciliation, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${glReconciliation.organizationPartyId}`)
    },
    createdByUserLogin: {type: GraphQLString},
    openingBalance: {type: GraphQLFloat},
    glReconciliationEntries: {
      type: new GraphQLList(GlReconciliationEntryType),
      args : {},
      resolve: (glReconciliation, args, {loaders}) => loaders.ofbizArray.load(`accounting/glReconciliation/glReconciliationEntrys/find?glReconciliationId=${glReconciliation.glReconciliationId}`)
    },
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {},
      resolve: (glReconciliation, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTranss/find?glReconciliationId=${glReconciliation.glReconciliationId}`)
    }
  })
});

export {GlReconciliationType};
    