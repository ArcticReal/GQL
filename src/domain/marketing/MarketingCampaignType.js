
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {MarketingCampaignPromoType} from '../marketing/MarketingCampaignPromoType.js';
import {MarketingCampaignNoteType} from '../marketing/MarketingCampaignNoteType.js';
import {ContactListType} from '../marketing/ContactListType.js';
import {TrackingCodeType} from '../marketing/TrackingCodeType.js';
import {MarketingCampaignRoleType} from '../marketing/MarketingCampaignRoleType.js';
import {MarketingCampaignPriceType} from '../marketing/MarketingCampaignPriceType.js';


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
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbiz.load(`marketingCampaigns/find?marketingCampaignId=${marketingCampaign.parentCampaignId}`)
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
    marketingCampaignPromo: {
      type: new GraphQLList(MarketingCampaignPromoType),
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketingCampaignPromos/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    trackingCode: {
      type: new GraphQLList(TrackingCodeType),
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`trackingCodes/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    marketingCampaign: {
      type: new GraphQLList(MarketingCampaignType),
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketingCampaigns/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    contactList: {
      type: new GraphQLList(ContactListType),
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`contactLists/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    marketingCampaignNote: {
      type: new GraphQLList(MarketingCampaignNoteType),
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketingCampaignNotes/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    marketingCampaignRole: {
      type: new GraphQLList(MarketingCampaignRoleType),
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketingCampaignRoles/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    },
    marketingCampaignPrice: {
      type: new GraphQLList(MarketingCampaignPriceType),
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaign, args, {loaders}) => loaders.ofbizArray.load(`marketingCampaignPrices/find?marketingCampaignId=${marketingCampaign.marketingCampaignId}`)
    }
  })
});

export {MarketingCampaignType};
    