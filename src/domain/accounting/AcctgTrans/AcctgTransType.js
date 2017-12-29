
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

import {PhysicalInventoryType} from '../../product/PhysicalInventory/PhysicalInventoryType.js';
import {AcctgTransAttributeType} from '../../accounting/AcctgTransAttribute/AcctgTransAttributeType.js';
import {InvoiceType} from '../../accounting/Invoice/InvoiceType.js';
import {GlJournalType} from '../../accounting/GlJournal/GlJournalType.js';
import {ShipmentReceiptType} from '../../shipment/ShipmentReceipt/ShipmentReceiptType.js';
import {FinAccountTransType} from '../../accounting/FinAccountTrans/FinAccountTransType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {AcctgTransEntryType} from '../../accounting/AcctgTransEntry/AcctgTransEntryType.js';
import {ShipmentType} from '../../shipment/Shipment/ShipmentType.js';
import {AcctgTransTypeType} from '../../accounting/AcctgTransType/AcctgTransTypeType.js';
import {GlFiscalTypeType} from '../../accounting/GlFiscalType/GlFiscalTypeType.js';
import {FixedAssetType} from '../../accounting/FixedAsset/FixedAssetType.js';
import {InventoryItemVarianceType} from '../../product/InventoryItemVariance/InventoryItemVarianceType.js';
import {PaymentType} from '../../accounting/Payment/PaymentType.js';
import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {PartyType} from '../../party/Party/PartyType.js';


const AcctgTransType = new GraphQLObjectType({
  name: 'AcctgTransType',
  description: 'Type for AcctgTrans in accounting',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${acctgTrans.workEffortId}`)
    },
    theirAcctgTransId: {type: GraphQLString},
    description: {type: GraphQLString},
    postedDate: {type: GraphQLString},
    physicalInventory: {
      type: PhysicalInventoryType,
      args : {physicalInventoryId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`product/physicalInventorys/find?physicalInventoryId=${acctgTrans.physicalInventoryId}`)
    },
    lastModifiedByUserLogin: {type: GraphQLString},
    isPosted: {type: GraphQLBoolean},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${acctgTrans.paymentId}`)
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
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentReceipts/find?receiptId=${acctgTrans.receiptId}`)
    },
    createdByUserLogin: {type: GraphQLString},
    finAccountTrans: {
      type: FinAccountTransType,
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTranss/find?finAccountTransId=${acctgTrans.finAccountTransId}`)
    },
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${acctgTrans.roleTypeId}`)
    },
    acctgTransType: {
      type: AcctgTransTypeType,
      args : {acctgTransTypeId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/acctgTrans/acctgTransTypes/find?acctgTransTypeId=${acctgTrans.acctgTransTypeId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    glFiscalType: {
      type: GlFiscalTypeType,
      args : {glFiscalTypeId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/glFiscalTypes/find?glFiscalTypeId=${acctgTrans.glFiscalTypeId}`)
    },
    glJournal: {
      type: GlJournalType,
      args : {glJournalId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/glJournals/find?glJournalId=${acctgTrans.glJournalId}`)
    },
    transactionDate: {type: GraphQLString},
    scheduledPostingDate: {type: GraphQLString},
    acctgTransId: {type: GraphQLString},
    voucherRef: {type: GraphQLString},
    inventoryItem: {
      type: InventoryItemVarianceType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItem/inventoryItemVariances/find?inventoryItemId=${acctgTrans.inventoryItemId}`)
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
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/fixedAssets/find?fixedAssetId=${acctgTrans.fixedAssetId}`)
    },
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/invoices/find?invoiceId=${acctgTrans.invoiceId}`)
    },
    groupStatusId: {type: GraphQLString},
    acctgTransAttributes: {
      type: new GraphQLList(AcctgTransAttributeType),
      args : {},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransAttributes/find?acctgTransId=${acctgTrans.acctgTransId}`)
    },
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {},
      resolve: (acctgTrans, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntrys/find?acctgTransId=${acctgTrans.acctgTransId}`)
    }
  })
});

export {AcctgTransType};
    