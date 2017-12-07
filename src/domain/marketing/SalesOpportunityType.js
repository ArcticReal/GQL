
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {SalesOpportunityCompetitorType} from '../marketing/SalesOpportunityCompetitorType.js';
import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {SalesOpportunityWorkEffortType} from '../marketing/SalesOpportunityWorkEffortType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {SalesOpportunityTrckCodeType} from '../marketing/SalesOpportunityTrckCodeType.js';
import {SalesOpportunityQuoteType} from '../marketing/SalesOpportunityQuoteType.js';


const SalesOpportunityType = new GraphQLObjectType({
  name: 'SalesOpportunityType',
  description: 'Type for SalesOpportunity in marketing',

  fields: () => ({
    estimatedProbability: {type: GraphQLFloat},
    opportunityName: {type: GraphQLString},
    marketingCampaignId: {type: GraphQLString},
    description: {type: GraphQLString},
    opportunityStageId: {type: GraphQLString},
    typeEnumId: {type: GraphQLString},
    estimatedCloseDate: {type: GraphQLString},
    dataSourceId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    nextStep: {type: GraphQLString},
    nextStepDate: {type: GraphQLString},
    estimatedAmount: {type: GraphQLFloat},
    createdByUserLogin: {type: GraphQLString},
    salesOpportunityId: {type: GraphQLString},
    salesOpportunityWorkEffort: {
      type: new GraphQLList(SalesOpportunityWorkEffortType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityWorkEfforts/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    salesOpportunityTrckCode: {
      type: new GraphQLList(SalesOpportunityTrckCodeType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityTrckCodes/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    salesOpportunityCompetitor: {
      type: new GraphQLList(SalesOpportunityCompetitorType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityCompetitors/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    orderItem: {
      type: new GraphQLList(OrderItemType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    salesOpportunityQuote: {
      type: new GraphQLList(SalesOpportunityQuoteType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityQuotes/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    }
  })
});

export {SalesOpportunityType};
    