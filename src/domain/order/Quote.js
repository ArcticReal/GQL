
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
import {QuoteNoteType} from '../order/QuoteNote.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustment.js';
import {QuoteTermType} from '../order/QuoteTerm.js';
import {QuoteItemType} from '../order/QuoteItem.js';
import {QuoteWorkEffortType} from '../order/QuoteWorkEffort.js';
import {ProductStoreType} from '../product/ProductStore.js';
import {QuoteAttributeType} from '../order/QuoteAttribute.js';
import {QuoteTypeType} from '../order/QuoteType.js';
import {QuoteCoefficientType} from '../order/QuoteCoefficient.js';
import {SalesOpportunityQuoteType} from '../marketing/SalesOpportunityQuote.js';
import {QuoteRoleType} from '../order/QuoteRole.js';


const QuoteType = new GraphQLObjectType({
  name: 'QuoteType',
  description: 'Type for Quote in order',

  fields: () => ({
    quoteType: {
      type: QuoteTypeType,
      args : {quoteTypeId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbiz.load(`order/quote/quoteTypes/find?quoteTypeId=${quote.quoteTypeId}`)
    },
    currencyUomId: {type: GraphQLString},
    salesChannelEnumId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    validFromDate: {type: GraphQLString},
    description: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${quote.productStoreId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${quote.partyId}`)
    },
    issueDate: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    validThruDate: {type: GraphQLString},
    quoteName: {type: GraphQLString},
    salesOpportunityQuotes: {
      type: new GraphQLList(SalesOpportunityQuoteType),
      args : {},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesOpportunity/salesOpportunityQuotes/find?quoteId=${quote.quoteId}`)
    },
    quoteNotes: {
      type: new GraphQLList(QuoteNoteType),
      args : {},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteNotes/find?quoteId=${quote.quoteId}`)
    },
    quoteAttributes: {
      type: new GraphQLList(QuoteAttributeType),
      args : {},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteAttributes/find?quoteId=${quote.quoteId}`)
    },
    quoteRoles: {
      type: new GraphQLList(QuoteRoleType),
      args : {},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteRoles/find?quoteId=${quote.quoteId}`)
    },
    quoteWorkEfforts: {
      type: new GraphQLList(QuoteWorkEffortType),
      args : {},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteWorkEfforts/find?quoteId=${quote.quoteId}`)
    },
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteItems/find?quoteId=${quote.quoteId}`)
    },
    quoteCoefficients: {
      type: new GraphQLList(QuoteCoefficientType),
      args : {},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteCoefficients/find?quoteId=${quote.quoteId}`)
    },
    quoteAdjustments: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteAdjustments/find?quoteId=${quote.quoteId}`)
    },
    quoteTerms: {
      type: new GraphQLList(QuoteTermType),
      args : {},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteTerms/find?quoteId=${quote.quoteId}`)
    }
  })
});

export {QuoteType};
    




const QuoteInputType = new GraphQLInputObjectType({
  name: 'QuoteInputType',
  description: 'input type for Quote in order',

  fields: () => ({
    quoteTypeId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    salesChannelEnumId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    validFromDate: {type: GraphQLString},
    description: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    issueDate: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    validThruDate: {type: GraphQLString},
    quoteName: {type: GraphQLString}
  })
});

export {QuoteInputType};
    