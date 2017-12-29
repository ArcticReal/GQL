
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
import {InventoryItemType} from '../../product/InventoryItem/InventoryItemType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {AcctgTransEntryTypeType} from '../../accounting/AcctgTransEntryType/AcctgTransEntryTypeType.js';
import {GlAccountOrganizationType} from '../../accounting/GlAccountOrganization/GlAccountOrganizationType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {GlReconciliationEntryType} from '../../accounting/GlReconciliationEntry/GlReconciliationEntryType.js';
import {SettlementTermType} from '../../accounting/SettlementTerm/SettlementTermType.js';


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
      resolve: (acctgTransEntry, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${acctgTransEntry.partyId}`)
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
    