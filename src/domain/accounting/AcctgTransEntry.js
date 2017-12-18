
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

import {GlAccountTypeType} from '../accounting/GlAccountType.js';
import {InventoryItemType} from '../product/InventoryItem.js';
import {PartyType} from '../party/Party.js';
import {RoleTypeType} from '../party/RoleType.js';
import {AcctgTransEntryTypeType} from '../accounting/AcctgTransEntryType.js';
import {GlAccountOrganizationType} from '../accounting/GlAccountOrganization.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';
import {GlReconciliationEntryType} from '../accounting/GlReconciliationEntry.js';
import {SettlementTermType} from '../accounting/SettlementTerm.js';


const AcctgTransEntryType = new GraphQLObjectType({
  name: 'AcctgTransEntryType',
  description: 'Type for AcctgTransEntry in accounting',

  fields: () => ({
    dueDate: {type: GraphQLString},
    groupId: {type: GraphQLString},
    glAccount: {
      type: GlAccountOrganizationType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountOrganizations/find?glAccountId=${acctgTransEntry.glAccountId}`)
    },
    description: {type: GraphQLString},
    theirPartyId: {type: GraphQLString},
    acctgTransEntryType: {
      type: AcctgTransEntryTypeType,
      args : {acctgTransEntryTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`accounting/acctgTrans/acctgTransEntryTypes/find?acctgTransEntryTypeId=${acctgTransEntry.acctgTransEntryTypeId}`)
    },
    origAmount: {type: GraphQLFloat},
    debitCreditFlag: {type: GraphQLBoolean},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${acctgTransEntry.partyId}`)
    },
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${acctgTransEntry.roleTypeId}`)
    },
    theirProductId: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    settlementTerm: {
      type: SettlementTermType,
      args : {settlementTermId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`accounting/settlementTerms/find?settlementTermId=${acctgTransEntry.settlementTermId}`)
    },
    reconcileStatusId: {type: GraphQLString},
    isSummary: {type: GraphQLBoolean},
    acctgTrans: {
      type: AcctgTransType,
      args : {acctgTransId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`accounting/acctgTranss/find?acctgTransId=${acctgTransEntry.acctgTransId}`)
    },
    voucherRef: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${acctgTransEntry.inventoryItemId}`)
    },
    currencyUomId: {type: GraphQLString},
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${acctgTransEntry.glAccountTypeId}`)
    },
    taxId: {type: GraphQLString},
    origCurrencyUomId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    acctgTransEntrySeqId: {type: GraphQLString},
    glReconciliationEntries: {
      type: new GraphQLList(GlReconciliationEntryType),
      args : {},
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbizArray.load(`accounting/glReconciliation/glReconciliationEntrys/find?acctgTransId=${acctgTransEntry.acctgTransId}`)
    }
  })
});

export {AcctgTransEntryType};
    




const AcctgTransEntryInputType = new GraphQLInputObjectType({
  name: 'AcctgTransEntryInputType',
  description: 'input type for AcctgTransEntry',

  fields: () => ({
    acctgTransEntrySeqId: {type: GraphQLString},
    acctgTransEntryTypeId: {type: GraphQLString},
    acctgTransId: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    debitCreditFlag: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    dueDate: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    groupId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    isSummary: {type: GraphQLBoolean},
    organizationPartyId: {type: GraphQLString},
    origAmount: {type: GraphQLFloat},
    origCurrencyUomId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productId: {type: GraphQLString},
    reconcileStatusId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    settlementTermId: {type: GraphQLString},
    taxId: {type: GraphQLString},
    theirPartyId: {type: GraphQLString},
    theirProductId: {type: GraphQLString},
    voucherRef: {type: GraphQLString}
  })
});

export {AcctgTransEntryInputType};
    