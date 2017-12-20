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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const addInvoiceItemTypeGlAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz addInvoiceItemTypeGlAssignment method',
  args:{glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},invoiceItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/addInvoiceItemTypeGlAssignment?glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}invoiceItemTypeId=${args.invoiceItemTypeId}`, null, req);
  }
};
export {addInvoiceItemTypeGlAssignment};


const addPaymentMethodTypeGlAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz addPaymentMethodTypeGlAssignment method',
  args:{glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/addPaymentMethodTypeGlAssignment?glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}paymentMethodTypeId=${args.paymentMethodTypeId}`, null, req);
  }
};
export {addPaymentMethodTypeGlAssignment};


const addPaymentTypeGlAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz addPaymentTypeGlAssignment method',
  args:{paymentTypeId: {type: GraphQLString},glAccountTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/addPaymentTypeGlAssignment?paymentTypeId=${args.paymentTypeId}glAccountTypeId=${args.glAccountTypeId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {addPaymentTypeGlAssignment};


const createGlAccountTypeDefault = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlAccountTypeDefault method',
  args:{glAccountTypeId: {type: GraphQLString},glAccountId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/createGlAccountTypeDefault?glAccountTypeId=${args.glAccountTypeId}glAccountId=${args.glAccountId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {createGlAccountTypeDefault};


const createPartyAcctgPreference = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyAcctgPreference method',
  args:{partyId: {type: GraphQLString},cogsMethodId: {type: GraphQLString},oldInvoiceSequenceEnumId: {type: GraphQLString},baseCurrencyUomId: {type: GraphQLString},lastInvoiceRestartDate: {type: GraphQLString},quoteSeqCustMethId: {type: GraphQLString},lastQuoteNumber: {type: GraphQLInt},errorGlJournalId: {type: GraphQLString},orderIdPrefix: {type: GraphQLString},fiscalYearStartDay: {type: GraphQLInt},oldQuoteSequenceEnumId: {type: GraphQLString},lastInvoiceNumber: {type: GraphQLInt},taxFormId: {type: GraphQLString},refundPaymentMethodId: {type: GraphQLString},useInvoiceIdForReturns: {type: GraphQLString},invoiceIdPrefix: {type: GraphQLString},lastOrderNumber: {type: GraphQLInt},orderSeqCustMethId: {type: GraphQLString},fiscalYearStartMonth: {type: GraphQLInt},quoteIdPrefix: {type: GraphQLString},oldOrderSequenceEnumId: {type: GraphQLString},invoiceSeqCustMethId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/createPartyAcctgPreference?partyId=${args.partyId}cogsMethodId=${args.cogsMethodId}oldInvoiceSequenceEnumId=${args.oldInvoiceSequenceEnumId}baseCurrencyUomId=${args.baseCurrencyUomId}lastInvoiceRestartDate=${args.lastInvoiceRestartDate}quoteSeqCustMethId=${args.quoteSeqCustMethId}lastQuoteNumber=${args.lastQuoteNumber}errorGlJournalId=${args.errorGlJournalId}orderIdPrefix=${args.orderIdPrefix}fiscalYearStartDay=${args.fiscalYearStartDay}oldQuoteSequenceEnumId=${args.oldQuoteSequenceEnumId}lastInvoiceNumber=${args.lastInvoiceNumber}taxFormId=${args.taxFormId}refundPaymentMethodId=${args.refundPaymentMethodId}useInvoiceIdForReturns=${args.useInvoiceIdForReturns}invoiceIdPrefix=${args.invoiceIdPrefix}lastOrderNumber=${args.lastOrderNumber}orderSeqCustMethId=${args.orderSeqCustMethId}fiscalYearStartMonth=${args.fiscalYearStartMonth}quoteIdPrefix=${args.quoteIdPrefix}oldOrderSequenceEnumId=${args.oldOrderSequenceEnumId}invoiceSeqCustMethId=${args.invoiceSeqCustMethId}`, null, req);
  }
};
export {createPartyAcctgPreference};


const getFXConversion = {
  type: ResopnseType,
  description: 'mutation for ofbiz getFXConversion method',
  args:{uomId: {type: GraphQLString},uomIdTo: {type: GraphQLString},asOfTimestamp: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/getFXConversion?uomId=${args.uomId}uomIdTo=${args.uomIdTo}asOfTimestamp=${args.asOfTimestamp}`, null, req);
  }
};
export {getFXConversion};


const getPartyAccountingPreferences = {
  type: ResopnseType,
  description: 'mutation for ofbiz getPartyAccountingPreferences method',
  args:{organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/getPartyAccountingPreferences?organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {getPartyAccountingPreferences};


const removeGlAccountTypeDefault = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeGlAccountTypeDefault method',
  args:{glAccountTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/removeGlAccountTypeDefault?glAccountTypeId=${args.glAccountTypeId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {removeGlAccountTypeDefault};


const removeInvoiceItemTypeGlAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz removeInvoiceItemTypeGlAssignment method',
  args:{organizationPartyId: {type: GraphQLString},invoiceItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/removeInvoiceItemTypeGlAssignment?organizationPartyId=${args.organizationPartyId}invoiceItemTypeId=${args.invoiceItemTypeId}`, null, req);
  }
};
export {removeInvoiceItemTypeGlAssignment};


const removePaymentMethodTypeGlAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz removePaymentMethodTypeGlAssignment method',
  args:{organizationPartyId: {type: GraphQLString},paymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/removePaymentMethodTypeGlAssignment?organizationPartyId=${args.organizationPartyId}paymentMethodTypeId=${args.paymentMethodTypeId}`, null, req);
  }
};
export {removePaymentMethodTypeGlAssignment};


const removePaymentTypeGlAssignment = {
  type: ResopnseType,
  description: 'mutation for ofbiz removePaymentTypeGlAssignment method',
  args:{paymentTypeId: {type: GraphQLString},organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/removePaymentTypeGlAssignment?paymentTypeId=${args.paymentTypeId}organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {removePaymentTypeGlAssignment};


const setAcctgCompany = {
  type: ResopnseType,
  description: 'mutation for ofbiz setAcctgCompany method',
  args:{organizationPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/setAcctgCompany?organizationPartyId=${args.organizationPartyId}`, null, req);
  }
};
export {setAcctgCompany};


const updateFXConversion = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFXConversion method',
  args:{conversionFactor: {type: GraphQLFloat},uomId: {type: GraphQLString},uomIdTo: {type: GraphQLString},fromDate: {type: GraphQLString},purposeEnumId: {type: GraphQLString},asOfTimestamp: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/updateFXConversion?conversionFactor=${args.conversionFactor}uomId=${args.uomId}uomIdTo=${args.uomIdTo}fromDate=${args.fromDate}purposeEnumId=${args.purposeEnumId}asOfTimestamp=${args.asOfTimestamp}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateFXConversion};


const updatePartyAcctgPreference = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyAcctgPreference method',
  args:{partyId: {type: GraphQLString},errorGlJournalId: {type: GraphQLString},refundPaymentMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/accountingAdmin/updatePartyAcctgPreference?partyId=${args.partyId}errorGlJournalId=${args.errorGlJournalId}refundPaymentMethodId=${args.refundPaymentMethodId}`, null, req);
  }
};
export {updatePartyAcctgPreference};
