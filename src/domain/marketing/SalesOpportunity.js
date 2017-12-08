
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

import {SalesOpportunityCompetitorType} from '../marketing/SalesOpportunityCompetitor.js';
import {InvoiceItemType} from '../accounting/InvoiceItem.js';
import {SalesOpportunityWorkEffortType} from '../marketing/SalesOpportunityWorkEffort.js';
import {OrderItemType} from '../order/OrderItem.js';
import {SalesOpportunityTrckCodeType} from '../marketing/SalesOpportunityTrckCode.js';
import {SalesOpportunityQuoteType} from '../marketing/SalesOpportunityQuote.js';


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
    salesOpportunityWorkEfforts: {
      type: new GraphQLList(SalesOpportunityWorkEffortType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityWorkEfforts/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    salesOpportunityTrckCodes: {
      type: new GraphQLList(SalesOpportunityTrckCodeType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityTrckCodes/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    salesOpportunityCompetitors: {
      type: new GraphQLList(SalesOpportunityCompetitorType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityCompetitors/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`orderItems/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    salesOpportunityQuotes: {
      type: new GraphQLList(SalesOpportunityQuoteType),
      args : {salesOpportunityId: {type: GraphQLString}},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`salesOpportunityQuotes/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    }
  })
});

export {SalesOpportunityType};
    




const SalesOpportunityInputType = new GraphQLInputObjectType({
  name: 'SalesOpportunityInputType',
  description: 'input type for SalesOpportunity in marketing',

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
    salesOpportunityId: {type: GraphQLString}
  })
});

export {SalesOpportunityInputType};
    