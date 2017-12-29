
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

import {InventoryItemType} from '../../product/InventoryItem/InventoryItemType.js';
import {SalesOpportunityType} from '../../marketing/SalesOpportunity/SalesOpportunityType.js';
import {ProductFeatureType} from '../../product/ProductFeature/ProductFeatureType.js';
import {InvoiceItemAssocType} from '../../accounting/InvoiceItemAssoc/InvoiceItemAssocType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {OrderItemBillingType} from '../../order/OrderItemBilling/OrderItemBillingType.js';
import {ShipmentItemBillingType} from '../../shipment/ShipmentItemBilling/ShipmentItemBillingType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {OrderAdjustmentBillingType} from '../../order/OrderAdjustmentBilling/OrderAdjustmentBillingType.js';
import {ReturnItemBillingType} from '../../order/ReturnItemBilling/ReturnItemBillingType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {TimeEntryType} from '../../workeffort/TimeEntry/TimeEntryType.js';
import {TaxAuthorityRateProductType} from '../../accounting/TaxAuthorityRateProduct/TaxAuthorityRateProductType.js';
import {InvoiceItemAttributeType} from '../../accounting/InvoiceItemAttribute/InvoiceItemAttributeType.js';
import {InvoiceItemTypeType} from '../../accounting/InvoiceItemType/InvoiceItemTypeType.js';
import {WorkEffortBillingType} from '../../workeffort/WorkEffortBilling/WorkEffortBillingType.js';


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
      resolve: (invoiceItem, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${invoiceItem.taxAuthPartyId}`)
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
    