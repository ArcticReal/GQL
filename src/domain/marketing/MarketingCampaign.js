
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

import {MarketingCampaignPromoType} from '../marketing/MarketingCampaignPromo.js';
import {MarketingCampaignNoteType} from '../marketing/MarketingCampaignNote.js';
import {ContactListType} from '../marketing/ContactList.js';
import {TrackingCodeType} from '../marketing/TrackingCode.js';
import {MarketingCampaignRoleType} from '../marketing/MarketingCampaignRole.js';
import {MarketingCampaignPriceType} from '../marketing/MarketingCampaignPrice.js';


const MarketingCampaignType = new GraphQLObjectType({
  name: 'MarketingCampaignType',
  description: 'Type for MarketingCampaign in marketing',

  fields: () => ({
    expectedResponsePercent: {type: GraphQLFloat},
    expectedRevenue: {type: GraphQLFloat},
    convertedLeads: {type: GraphQLString},
    campaignSummary: {type: GraphQLString},
    marketingCampaignId: {type: GraphQLString},
    numSent: {type: GraphQLInt},
    parentCampaign: {
      type: MarketingCampaignType,
      args : {parentCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbiz.load(`marketing/marketingCampaigns/find?marketingCampaignId=${marketingCampaign.parentCampaignId}`)
    },
    estimatedCost: {type: GraphQLFloat},
    isActive: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    budgetedCost: {type: GraphQLFloat},
    campaignName: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    startDate: {type: GraphQLString},
    actualCost: {type: GraphQLFloat},
    marketingCampaignPromos: {
      type: new GraphQLList(MarketingCampaignPromoType),
      args : {},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketing/marketingCampaign/marketingCampaignPromos/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    trackingCodes: {
      type: new GraphQLList(TrackingCodeType),
      args : {},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCodes/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    marketingCampaigns: {
      type: new GraphQLList(MarketingCampaignType),
      args : {},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketing/marketingCampaigns/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    contactLists: {
      type: new GraphQLList(ContactListType),
      args : {},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketing/contactLists/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    marketingCampaignNotes: {
      type: new GraphQLList(MarketingCampaignNoteType),
      args : {},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketing/marketingCampaign/marketingCampaignNotes/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    marketingCampaignRoles: {
      type: new GraphQLList(MarketingCampaignRoleType),
      args : {},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketing/marketingCampaign/marketingCampaignRoles/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    marketingCampaignPrices: {
      type: new GraphQLList(MarketingCampaignPriceType),
      args : {},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketing/marketingCampaign/marketingCampaignPrices/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    }
  })
});

export {MarketingCampaignType};
    




const MarketingCampaignInputType = new GraphQLInputObjectType({
  name: 'MarketingCampaignInputType',
  description: 'input type for MarketingCampaign in marketing',

  fields: () => ({
    expectedResponsePercent: {type: GraphQLFloat},
    expectedRevenue: {type: GraphQLFloat},
    convertedLeads: {type: GraphQLString},
    campaignSummary: {type: GraphQLString},
    marketingCampaignId: {type: GraphQLString},
    numSent: {type: GraphQLInt},
    parentCampaignId: {type: GraphQLString},
    estimatedCost: {type: GraphQLFloat},
    isActive: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    budgetedCost: {type: GraphQLFloat},
    campaignName: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    startDate: {type: GraphQLString},
    actualCost: {type: GraphQLFloat}
  })
});

export {MarketingCampaignInputType};
    