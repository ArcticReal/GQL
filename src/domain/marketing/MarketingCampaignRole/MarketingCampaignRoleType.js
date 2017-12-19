
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {MarketingCampaignType} from '../../marketing/MarketingCampaign/MarketingCampaignType.js';


const MarketingCampaignRoleType = new GraphQLObjectType({
  name: 'MarketingCampaignRoleType',
  description: 'Type for MarketingCampaignRole in marketing',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    marketingCampaign: {
      type: MarketingCampaignType,
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaignRole, args, {loaders}) => loaders.ofbiz.load(`marketing/marketingCampaigns/find?marketingCampaignId=${marketingCampaignRole.marketingCampaignId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (marketingCampaignRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${marketingCampaignRole.partyId}`)
    }
  })
});

export {MarketingCampaignRoleType};
    