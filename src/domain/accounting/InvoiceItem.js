
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

import {InventoryItemType} from '../product/InventoryItem.js';
import {SalesOpportunityType} from '../marketing/SalesOpportunity.js';
import {ProductFeatureType} from '../product/ProductFeature.js';
import {InvoiceItemAssocType} from '../accounting/InvoiceItemAssoc.js';
import {ProductType} from '../product/Product.js';
import {OrderItemBillingType} from '../order/OrderItemBilling.js';
import {ShipmentItemBillingType} from '../shipment/ShipmentItemBilling.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {OrderAdjustmentBillingType} from '../order/OrderAdjustmentBilling.js';
import {ReturnItemBillingType} from '../order/ReturnItemBilling.js';
import {PartyType} from '../party/Party.js';
import {TimeEntryType} from '../workeffort/TimeEntry.js';
import {TaxAuthorityRateProductType} from '../accounting/TaxAuthorityRateProduct.js';
import {InvoiceItemAttributeType} from '../accounting/InvoiceItemAttribute.js';
import {InvoiceItemTypeType} from '../accounting/InvoiceItemType.js';
import {WorkEffortBillingType} from '../workeffort/WorkEffortBilling.js';


const InvoiceItemType = new GraphQLObjectType({
  name: 'InvoiceItemType',
  description: 'Type for InvoiceItem in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${invoiceItem.productId}`)
    },
    overrideOrgParty: {
      type: PartyType,
      args : {overrideOrgPartyId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${invoiceItem.overrideOrgPartyId}`)
    },
    productFeature: {
      type: ProductFeatureType,
      args : {productFeatureId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatures/find?productFeatureId=${invoiceItem.productFeatureId}`)
    },
    taxableFlag: {type: GraphQLBoolean},
    taxAuthorityRateSeq: {
      type: TaxAuthorityRateProductType,
      args : {taxAuthorityRateSeqId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`accounting/taxAuthority/taxAuthorityRateProducts/find?taxAuthorityRateSeqId=${invoiceItem.taxAuthorityRateSeqId}`)
    },
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${invoiceItem.overrideGlAccountId}`)
    },
    description: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    uomId: {type: GraphQLString},
    invoiceItemType: {
      type: InvoiceItemTypeType,
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItemTypes/find?invoiceItemTypeId=${invoiceItem.invoiceItemTypeId}`)
    },
    inventoryItem: {
      type: InventoryItemType,
      args : {inventoryItemId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`product/inventoryItems/find?inventoryItemId=${invoiceItem.inventoryItemId}`)
    },
    taxAuthParty: {
      type: PartyType,
      args : {taxAuthPartyId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${invoiceItem.taxAuthPartyId}`)
    },
    parentInvoice: {
      type: InvoiceItemType,
      args : {parentInvoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItems/find?invoiceId=${invoiceItem.parentInvoiceId}`)
    },
    parentInvoiceItemSeqId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    invoice: {
      type: new GraphQLList(InvoiceItemType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?parentInvoiceId=${invoiceItem.invoiceId}`)
    },
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`marketing/salesOpportunitys/find?salesOpportunityId=${invoiceItem.salesOpportunityId}`)
    },
    shipmentItemBillings: {
      type: new GraphQLList(ShipmentItemBillingType),
      args : {},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentItemBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    orderItemBillings: {
      type: new GraphQLList(OrderItemBillingType),
      args : {},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    workEffortBillings: {
      type: new GraphQLList(WorkEffortBillingType),
      args : {},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    orderAdjustmentBillings: {
      type: new GraphQLList(OrderAdjustmentBillingType),
      args : {},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`order/orderAdjustment/orderAdjustmentBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    returnItemBillings: {
      type: new GraphQLList(ReturnItemBillingType),
      args : {},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemBillings/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    invoiceItemAssocs: {
      type: new GraphQLList(InvoiceItemAssocType),
      args : {},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemAssocs/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    invoiceItemAttributes: {
      type: new GraphQLList(InvoiceItemAttributeType),
      args : {},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemAttributes/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    timeEntries: {
      type: new GraphQLList(TimeEntryType),
      args : {},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`workeffort/timeEntrys/find?invoiceId=${invoiceItem.invoiceId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {},
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?invoiceId=${invoiceItem.invoiceId}`)
    }
  })
});

export {InvoiceItemType};
    




const InvoiceItemInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemInputType',
  description: 'input type for InvoiceItem',

  fields: () => ({
    amount: {type: GraphQLFloat},
    description: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    overrideGlAccountId: {type: GraphQLString},
    overrideOrgPartyId: {type: GraphQLString},
    parentInvoiceId: {type: GraphQLString},
    parentInvoiceItemSeqId: {type: GraphQLString},
    productFeatureId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    salesOpportunityId: {type: GraphQLString},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxAuthorityRateSeqId: {type: GraphQLString},
    taxableFlag: {type: GraphQLBoolean},
    uomId: {type: GraphQLString}
  })
});

export {InvoiceItemInputType};
    