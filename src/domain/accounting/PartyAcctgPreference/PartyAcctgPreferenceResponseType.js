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

const PartyAcctgPreferenceResponseType = new GraphQLObjectType({
  name: 'PartyAcctgPreferenceResponseType',
  description: 'response type for PartyAcctgPreference',

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

export {PartyAcctgPreferenceResponseType};
    