
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PhysicalInventoryType} from '../product/PhysicalInventoryType.js';
import {AcctgTransAttributeType} from '../accounting/AcctgTransAttributeType.js';
import {InvoiceType} from '../accounting/InvoiceType.js';
import {GlJournalType} from '../accounting/GlJournalType.js';
import {ShipmentReceiptType} from '../shipment/ShipmentReceiptType.js';
import {FinAccountTransType} from '../accounting/FinAccountTransType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntryType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {AcctgTransTypeType} from '../accounting/AcctgTransTypeType.js';
import {GlFiscalTypeType} from '../accounting/GlFiscalTypeType.js';
import {FixedAssetType} from '../accounting/FixedAssetType.js';
import {InventoryItemVarianceType} from '../product/InventoryItemVarianceType.js';
import {PaymentType} from '../accounting/PaymentType.js';
import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {PartyType} from '../party/PartyType.js';


const AcctgTransType = new GraphQLObjectType({
  name: 'AcctgTransType',
  description: 'Type for AcctgTrans in accounting',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${acctgTrans.workEffortId}`)
    },
    theirAcctgTransId: {type: GraphQLString},
    description: {type: GraphQLString},
    postedDate: {type: GraphQLString},
    physicalInventory: {
      type: PhysicalInventoryType,
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`physicalInventorys/find?physicalInventoryId=${acctgTrans.physicalInventoryId}`)
    },
    lastModifiedByUserLogin: {type: GraphQLString},
    isPosted: {type: GraphQLBoolean},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${acctgTrans.paymentId}`)
    },
    voucherDate: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${acctgTrans.partyId}`)
    },
    receipt: {
      type: ShipmentReceiptType,
      args : {receiptId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`shipmentReceipts/find?receiptId=${acctgTrans.receiptId}`)
    },
    createdByUserLogin: {type: GraphQLString},
    finAccountTrans: {
      type: FinAccountTransType,
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`finAccountTranss/find?finAccountTransId=${acctgTrans.finAccountTransId}`)
    },
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${acctgTrans.roleTypeId}`)
    },
    acctgTransType: {
      type: AcctgTransTypeType,
      args : {acctgTransTypeId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`acctgTransTypes/find?acctgTransTypeId=${acctgTrans.acctgTransTypeId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    glFiscalType: {
      type: GlFiscalTypeType,
      args : {glFiscalTypeId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`glFiscalTypes/find?glFiscalTypeId=${acctgTrans.glFiscalTypeId}`)
    },
    glJournal: {
      type: GlJournalType,
      args : {glJournalId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`glJournals/find?glJournalId=${acctgTrans.glJournalId}`)
    },
    transactionDate: {type: GraphQLString},
    scheduledPostingDate: {type: GraphQLString},
    acctgTransId: {type: GraphQLString},
    voucherRef: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemVarianceType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`inventoryItemVariances/find?inventoryItemId=${acctgTrans.inventoryItemId}`)
    },
    createdDate: {type: GraphQLString},
    shipment: {
      type: ShipmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`shipments/find?shipmentId=${acctgTrans.shipmentId}`)
    },
    fixedAsset: {
      type: FixedAssetType,
      args : {fixedAssetId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`fixedAssets/find?fixedAssetId=${acctgTrans.fixedAssetId}`)
    },
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`invoices/find?invoiceId=${acctgTrans.invoiceId}`)
    },
    groupStatusId: {type: GraphQLString},
    acctgTransAttribute: {
      type: new GraphQLList(AcctgTransAttributeType),
      args : {acctgTransId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbizArray.load(`acctgTransAttributes/find?acctgTransId=${acctgTrans.acctgTransId}`)
    },
    acctgTransEntry: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {acctgTransId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?acctgTransId=${acctgTrans.acctgTransId}`)
    }
  })
});

export {AcctgTransType};
    