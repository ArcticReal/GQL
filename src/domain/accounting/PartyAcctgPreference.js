
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
import {GlJournalType} from '../accounting/GlJournal.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';


const PartyAcctgPreferenceType = new GraphQLObjectType({
  name: 'PartyAcctgPreferenceType',
  description: 'Type for PartyAcctgPreference in accounting',

  fields: () => ({
    cogsMethodId: {type: GraphQLString},
    oldInvoiceSequenceEnumId: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    baseCurrencyUomId: {type: GraphQLString},
    lastInvoiceRestartDate: {type: GraphQLString},
    quoteSeqCustMethId: {type: GraphQLString},
    lastQuoteNumber: {type: GraphQLInt},
    errorGlJournal: {
      type: GlJournalType,
      args : {errorGlJournalId: {type: GraphQLString}},
      resolve: (partyAcctgPreference, args, {loaders}) => loaders.ofbiz.load(`accounting/glJournals/find?glJournalId=${partyAcctgPreference.errorGlJournalId}`)
    },
    orderIdPrefix: {type: GraphQLString},
    fiscalYearStartDay: {type: GraphQLInt},
    oldQuoteSequenceEnumId: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    lastInvoiceNumber: {type: GraphQLInt},
    taxFormId: {type: GraphQLString},
    refundPaymentMethod: {
      type: PaymentMethodType,
      args : {refundPaymentMethodId: {type: GraphQLString}},
      resolve: (partyAcctgPreference, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${partyAcctgPreference.refundPaymentMethodId}`)
    },
    useInvoiceIdForReturns: {type: GraphQLBoolean},
    invoiceIdPrefix: {type: GraphQLString},
    lastOrderNumber: {type: GraphQLInt},
    orderSeqCustMethId: {type: GraphQLString},
    fiscalYearStartMonth: {type: GraphQLInt},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyAcctgPreference, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${partyAcctgPreference.partyId}`)
    },
    quoteIdPrefix: {type: GraphQLString},
    oldOrderSequenceEnumId: {type: GraphQLString/*this was a type I didn't find TODO find a solution*/},
    invoiceSeqCustMethId: {type: GraphQLString}
  })
});

export {PartyAcctgPreferenceType};
    




const PartyAcctgPreferenceInputType = new GraphQLInputObjectType({
  name: 'PartyAcctgPreferenceInputType',
  description: 'input type for PartyAcctgPreference',

  fields: () => ({
    baseCurrencyUomId: {type: GraphQLString},
    cogsMethodId: {type: GraphQLString},
    errorGlJournalId: {type: GraphQLString},
    fiscalYearStartDay: {type: GraphQLInt},
    fiscalYearStartMonth: {type: GraphQLInt},
    invoiceIdPrefix: {type: GraphQLString},
    invoiceSeqCustMethId: {type: GraphQLString},
    lastInvoiceNumber: {type: GraphQLInt},
    lastInvoiceRestartDate: {type: GraphQLString},
    lastOrderNumber: {type: GraphQLInt},
    lastQuoteNumber: {type: GraphQLInt},
    oldInvoiceSequenceEnumId: {type: GraphQLString},
    oldOrderSequenceEnumId: {type: GraphQLString},
    oldQuoteSequenceEnumId: {type: GraphQLString},
    orderIdPrefix: {type: GraphQLString},
    orderSeqCustMethId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    quoteIdPrefix: {type: GraphQLString},
    quoteSeqCustMethId: {type: GraphQLString},
    refundPaymentMethodId: {type: GraphQLString},
    taxFormId: {type: GraphQLString},
    useInvoiceIdForReturns: {type: GraphQLBoolean}
  })
});

export {PartyAcctgPreferenceInputType};
    