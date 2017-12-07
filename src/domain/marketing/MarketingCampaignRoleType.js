
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {MarketingCampaignType} from '../marketing/MarketingCampaignType.js';


const MarketingCampaignRoleType = new GraphQLObjectType({
  name: 'MarketingCampaignRoleType',
  description: 'Type for MarketingCampaignRole in marketing',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    marketingCampaign: {
      type: MarketingCampaignType,
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaignRole, args, {loaders}) => loaders.ofbiz.load(`marketingCampaigns/find?marketingCampaignId=${marketingCampaignRole.marketingCampaignId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (marketingCampaignRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${marketingCampaignRole.partyId}`)
    }
  })
});

export {MarketingCampaignRoleType};
    