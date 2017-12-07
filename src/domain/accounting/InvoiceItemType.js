
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InventoryItemType} from '../product/InventoryItemType.js';
import {SalesOpportunityType} from '../marketing/SalesOpportunityType.js';
import {ProductFeatureType} from '../product/ProductFeatureType.js';
import {InvoiceItemAssocType} from '../accounting/InvoiceItemAssocType.js';
import {ProductType} from '../product/ProductType.js';
import {OrderItemBillingType} from '../order/OrderItemBillingType.js';
import {ShipmentItemBillingType} from '../shipment/ShipmentItemBillingType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {OrderAdjustmentBillingType} from '../order/OrderAdjustmentBillingType.js';
import {ReturnItemBillingType} from '../order/ReturnItemBillingType.js';
import {PartyType} from '../party/PartyType.js';
import {TimeEntryType} from '../workeffort/TimeEntryType.js';
import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProductType.js';
import {InvoiceItemAttributeType} from '../accounting/InvoiceItemAttributeType.js';
import {InvoiceItemTypeType} from '../accounting/InvoiceItemTypeType.js';
import {WorkEffortBillingType} from '../workeffort/WorkEffortBillingType.js';


const InvoiceItemType = new GraphQLObjectType({
  name: 'InvoiceItemType',
  description: 'Type for InvoiceItem in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${invoiceItem.productId}`)
    },
    overrideOrgParty: {
      type: PartyType,
      args : {overrideOrgPartyId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${invoiceItem.overrideOrgPartyId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`productFeatures/find?productFeatureId=${invoiceItem.productFeatureId}`)
    },
    taxableFlag: {type: GraphQLBoolean},
    taxAuthorityRateSeq: {
      type: TaxAuthorityRateProductType,
      args : {taxAuthorityRateSeqId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`taxAuthorityRateProducts/find?taxAuthorityRateSeqId=${invoiceItem.taxAuthorityRateSeqId}`)
    },
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${invoiceItem.overrideGlAccountId}`)
    },
    description: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    uomId: {type: GraphQLString},
    invoiceItemType: {
      type: InvoiceItemTypeType,
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`invoiceItemTypes/find?invoiceItemTypeId=${invoiceItem.invoiceItemTypeId}`)
    },
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`inventoryItems/find?inventoryItemId=${invoiceItem.inventoryItemId}`)
    },
    taxAuthParty: {
      type: PartyType,
      args : {taxAuthPartyId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${invoiceItem.taxAuthPartyId}`)
    },
    parentInvoice: {
      type: InvoiceItemType,
      args : {parentInvoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`invoiceItems/find?invoiceId=${invoiceItem.parentInvoiceId}`)
    },
    parentInvoiceItemSeqId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    invoice: {
      type: new GraphQLList(InvoiceItemType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?parentInvoiceId=${invoiceItem.invoiceId}`)
    },
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`salesOpportunitys/find?salesOpportunityId=${invoiceItem.salesOpportunityId}`)
    },
    shipmentItemBilling: {
      type: new GraphQLList(ShipmentItemBillingType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`shipmentItemBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    orderItemBilling: {
      type: new GraphQLList(OrderItemBillingType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`orderItemBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    workEffortBilling: {
      type: new GraphQLList(WorkEffortBillingType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`workEffortBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    orderAdjustmentBilling: {
      type: new GraphQLList(OrderAdjustmentBillingType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`orderAdjustmentBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    returnItemBilling: {
      type: new GraphQLList(ReturnItemBillingType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`returnItemBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    invoiceItemAssoc: {
      type: new GraphQLList(InvoiceItemAssocType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemAssocs/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    invoiceItemAttribute: {
      type: new GraphQLList(InvoiceItemAttributeType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemAttributes/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    timeEntry: {
      type: new GraphQLList(TimeEntryType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`timeEntrys/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?invoiceId=${invoiceItem.invoiceId}`)
    }
  })
});

export {InvoiceItemType};
    