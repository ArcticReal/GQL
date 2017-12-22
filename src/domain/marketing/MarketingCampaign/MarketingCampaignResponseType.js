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

const MarketingCampaignResponseType = new GraphQLObjectType({
  name: 'MarketingCampaignResponseType',
  description: 'response type for MarketingCampaign',

  fields: () => ({
    actualCost: {type: GraphQLFloat},
    budgetedCost: {type: GraphQLFloat},
    campaignName: {type: GraphQLString},
    campaignSummary: {type: GraphQLString},
    convertedLeads: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    estimatedCost: {type: GraphQLFloat},
    expectedResponsePercent: {type: GraphQLFloat},
    expectedRevenue: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    isActive: {type: GraphQLBoolean},
    lastModifiedByUserLogin: {type: GraphQLString},
    marketingCampaignId: {type: GraphQLString},
    numSent: {type: GraphQLInt},
    parentCampaignId: {type: GraphQLString},
    startDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {MarketingCampaignResponseType};
    