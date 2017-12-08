
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

import {PartyRoleType} from '../party/PartyRole.js';
import {MarketingCampaignType} from '../marketing/MarketingCampaign.js';


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
    




const MarketingCampaignRoleInputType = new GraphQLInputObjectType({
  name: 'MarketingCampaignRoleInputType',
  description: 'input type for MarketingCampaignRole in marketing',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    marketingCampaignId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {MarketingCampaignRoleInputType};
    