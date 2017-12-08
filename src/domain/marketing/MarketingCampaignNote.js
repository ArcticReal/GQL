
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

import {MarketingCampaignType} from '../marketing/MarketingCampaign.js';


const MarketingCampaignNoteType = new GraphQLObjectType({
  name: 'MarketingCampaignNoteType',
  description: 'Type for MarketingCampaignNote in marketing',

  fields: () => ({
    marketingCampaign: {
      type: MarketingCampaignType,
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaignNote, args, {loaders}) => loaders.ofbiz.load(`marketingCampaigns/find?marketingCampaignId=${marketingCampaignNote.marketingCampaignId}`)
    },
    noteId: {type: GraphQLString}
  })
});

export {MarketingCampaignNoteType};
    




const MarketingCampaignNoteInputType = new GraphQLInputObjectType({
  name: 'MarketingCampaignNoteInputType',
  description: 'input type for MarketingCampaignNote in marketing',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {MarketingCampaignNoteInputType};
    