
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountTypeType} from '../accounting/GlAccountTypeType.js';
import {InventoryItemType} from '../product/InventoryItemType.js';
import {PartyType} from '../party/PartyType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {AcctgTransEntryTypeType} from '../accounting/AcctgTransEntryTypeType.js';
import {GlAccountOrganizationType} from '../accounting/GlAccountOrganizationType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {GlReconciliationEntryType} from '../accounting/GlReconciliationEntryType.js';
import {SettlementTermType} from '../accounting/SettlementTermType.js';


const AcctgTransEntryType = new GraphQLObjectType({
  name: 'AcctgTransEntryType',
  description: 'Type for AcctgTransEntry in accounting',

  fields: () => ({
    dueDate: {type: GraphQLString},
    groupId: {type: GraphQLString},
    glAccount: {
      type: GlAccountOrganizationType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`glAccountOrganizations/find?glAccountId=${acctgTransEntry.glAccountId}`)
    },
    description: {type: GraphQLString},
    theirPartyId: {type: GraphQLString},
    acctgTransEntryType: {
      type: AcctgTransEntryTypeType,
      args : {acctgTransEntryTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`acctgTransEntryTypes/find?acctgTransEntryTypeId=${acctgTransEntry.acctgTransEntryTypeId}`)
    },
    origAmount: {type: GraphQLFloat},
    debitCreditFlag: {type: GraphQLBoolean},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${acctgTransEntry.partyId}`)
    },
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${acctgTransEntry.roleTypeId}`)
    },
    theirProductId: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    settlementTerm: {
      type: SettlementTermType,
      args : {settlementTermId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`settlementTerms/find?settlementTermId=${acctgTransEntry.settlementTermId}`)
    },
    reconcileStatusId: {type: GraphQLString},
    isSummary: {type: GraphQLBoolean},
    acctgTrans: {
      type: AcctgTransType,
      args : {acctgTransId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`acctgTranss/find?acctgTransId=${acctgTransEntry.acctgTransId}`)
    },
    voucherRef: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${acctgTransEntry.inventoryItemId}`)
    },
    currencyUomId: {type: GraphQLString},
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`glAccountTypes/find?glAccountTypeId=${acctgTransEntry.glAccountTypeId}`)
    },
    taxId: {type: GraphQLString},
    origCurrencyUomId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    acctgTransEntrySeqId: {type: GraphQLString},
    glReconciliationEntry: {
      type: new GraphQLList(GlReconciliationEntryType),
      args : {acctgTransId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbizArray.load(`glReconciliationEntrys/find?acctgTransId=${acctgTransEntry.acctgTransId}`)
    }
  })
});

export {AcctgTransEntryType};
    