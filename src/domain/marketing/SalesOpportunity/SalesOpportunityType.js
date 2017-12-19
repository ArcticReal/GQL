
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

import {SalesOpportunityCompetitorType} from '../../marketing/SalesOpportunityCompetitor/SalesOpportunityCompetitorType.js';
import {InvoiceItemType} from '../../accounting/InvoiceItem/InvoiceItemType.js';
import {SalesOpportunityWorkEffortType} from '../../marketing/SalesOpportunityWorkEffort/SalesOpportunityWorkEffortType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';
import {SalesOpportunityTrckCodeType} from '../../marketing/SalesOpportunityTrckCode/SalesOpportunityTrckCodeType.js';
import {SalesOpportunityQuoteType} from '../../marketing/SalesOpportunityQuote/SalesOpportunityQuoteType.js';


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
      args : {},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesOpportunity/salesOpportunityWorkEfforts/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    salesOpportunityTrckCodes: {
      type: new GraphQLList(SalesOpportunityTrckCodeType),
      args : {},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesOpportunity/salesOpportunityTrckCodes/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    salesOpportunityCompetitors: {
      type: new GraphQLList(SalesOpportunityCompetitorType),
      args : {},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesOpportunity/salesOpportunityCompetitors/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    invoiceItems: {
      type: new GraphQLList(InvoiceItemType),
      args : {},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItems/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    orderItems: {
      type: new GraphQLList(OrderItemType),
      args : {},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`order/orderItems/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    },
    salesOpportunityQuotes: {
      type: new GraphQLList(SalesOpportunityQuoteType),
      args : {},
      resolve: (salesOpportunity, args, {loaders}) => loaders.ofbizArray.load(`marketing/salesOpportunity/salesOpportunityQuotes/find?salesOpportunityId=${salesOpportunity.salesOpportunityId}`)
    }
  })
});

export {SalesOpportunityType};
    