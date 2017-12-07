
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {QuoteNoteType} from '../order/QuoteNoteType.js';
import {QuoteAdjustmentType} from '../order/QuoteAdjustmentType.js';
import {QuoteTermType} from '../order/QuoteTermType.js';
import {QuoteItemType} from '../order/QuoteItemType.js';
import {QuoteWorkEffortType} from '../order/QuoteWorkEffortType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';
import {QuoteAttributeType} from '../order/QuoteAttributeType.js';
import {QuoteTypeType} from '../order/QuoteTypeType.js';
import {QuoteCoefficientType} from '../order/QuoteCoefficientType.js';
import {SalesOpportunityQuoteType} from '../marketing/SalesOpportunityQuoteType.js';
import {QuoteRoleType} from '../order/QuoteRoleType.js';


const QuoteType = new GraphQLObjectType({
  name: 'QuoteType',
  description: 'Type for Quote in order',

  fields: () => ({
    quoteType: {
      type: QuoteTypeType,
      args : {quoteTypeId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbiz.load(`quoteTypes/find?quoteTypeId=${quote.quoteTypeId}`)
    },
    currencyUomId: {type: GraphQLString},
    salesChannelEnumId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    validFromDate: {type: GraphQLString},
    description: {type: GraphQLString},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${quote.productStoreId}`)
    },
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${quote.partyId}`)
    },
    issueDate: {type: GraphQLString},
    quoteId: {type: GraphQLString},
    validThruDate: {type: GraphQLString},
    quoteName: {type: GraphQLString},
    salesOpportunityQuote: {
      type: new GraphQLList(SalesOpportunityQuoteType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityQuotes/find?quoteId=${quote.quoteId}`)
    },
    quoteNote: {
      type: new GraphQLList(QuoteNoteType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`quoteNotes/find?quoteId=${quote.quoteId}`)
    },
    quoteAttribute: {
      type: new GraphQLList(QuoteAttributeType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`quoteAttributes/find?quoteId=${quote.quoteId}`)
    },
    quoteRole: {
      type: new GraphQLList(QuoteRoleType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`quoteRoles/find?quoteId=${quote.quoteId}`)
    },
    quoteWorkEffort: {
      type: new GraphQLList(QuoteWorkEffortType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`quoteWorkEfforts/find?quoteId=${quote.quoteId}`)
    },
    quoteItem: {
      type: new GraphQLList(QuoteItemType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?quoteId=${quote.quoteId}`)
    },
    quoteCoefficient: {
      type: new GraphQLList(QuoteCoefficientType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`quoteCoefficients/find?quoteId=${quote.quoteId}`)
    },
    quoteAdjustment: {
      type: new GraphQLList(QuoteAdjustmentType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`quoteAdjustments/find?quoteId=${quote.quoteId}`)
    },
    quoteTerm: {
      type: new GraphQLList(QuoteTermType),
      args : {quoteId: {type: GraphQLString}},
      resolve: (quote, args, {loaders}) => loaders.ofbizArray.load(`quoteTerms/find?quoteId=${quote.quoteId}`)
    }
  })
});

export {QuoteType};
    