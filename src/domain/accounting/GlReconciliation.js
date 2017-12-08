
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
import {FinAccountTransType} from '../accounting/FinAccountTrans.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {GlReconciliationEntryType} from '../accounting/GlReconciliationEntry.js';


const GlReconciliationType = new GraphQLObjectType({
  name: 'GlReconciliationType',
  description: 'Type for GlReconciliation in accounting',

  fields: () => ({
    lastModifiedDate: {type: GraphQLString},
    glReconciliationId: {type: GraphQLString},
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (glReconciliation, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${glReconciliation.glAccountId}`)
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
      resolve: (glReconciliation, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${glReconciliation.organizationPartyId}`)
    },
    createdByUserLogin: {type: GraphQLString},
    openingBalance: {type: GraphQLFloat},
    glReconciliationEntries: {
      type: new GraphQLList(GlReconciliationEntryType),
      args : {glReconciliationId: {type: GraphQLString}},
      resolve: (glReconciliation, args, {loaders}) => loaders.ofbizArray.load(`glReconciliationEntrys/find?glReconciliationId=${glReconciliation.glReconciliationId}`)
    },
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {glReconciliationId: {type: GraphQLString}},
      resolve: (glReconciliation, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?glReconciliationId=${glReconciliation.glReconciliationId}`)
    }
  })
});

export {GlReconciliationType};
    




const GlReconciliationInputType = new GraphQLInputObjectType({
  name: 'GlReconciliationInputType',
  description: 'input type for GlReconciliation in accounting',

  fields: () => ({
    lastModifiedDate: {type: GraphQLString},
    glReconciliationId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    glReconciliationName: {type: GraphQLString},
    description: {type: GraphQLString},
    reconciledDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    reconciledBalance: {type: GraphQLFloat},
    statusId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    openingBalance: {type: GraphQLFloat}
  })
});

export {GlReconciliationInputType};
    