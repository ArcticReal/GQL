
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

import {QuoteType} from '../../order/Quote/QuoteType.js';
import {SalesOpportunityType} from '../../marketing/SalesOpportunity/SalesOpportunityType.js';


const SalesOpportunityQuoteType = new GraphQLObjectType({
  name: 'SalesOpportunityQuoteType',
  description: 'Type for SalesOpportunityQuote in marketing',

  fields: () => ({
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (salesOpportunityQuote, args, {loaders}) => loaders.ofbiz.load(`order/quotes/find?quoteId=${salesOpportunityQuote.quoteId}`)
    },
    salesOpportunity: {
      type: SalesOpportunityType,
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunityQuote, args, {loaders}) => loaders.ofbiz.load(`marketing/salesOpportunitys/find?salesOpportunityId=${salesOpportunityQuote.salesOpportunityId}`)
    }
  })
});

export {SalesOpportunityQuoteType};
    