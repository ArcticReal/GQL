
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

import {ProductPromoType} from '../product/ProductPromo.js';
import {MarketingCampaignType} from '../marketing/MarketingCampaign.js';


const MarketingCampaignPromoType = new GraphQLObjectType({
  name: 'MarketingCampaignPromoType',
  description: 'Type for MarketingCampaignPromo in marketing',

  fields: () => ({
    marketingCampaign: {
      type: MarketingCampaignType,
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaignPromo, args, {loaders}) => loaders.ofbiz.load(`marketingCampaigns/find?marketingCampaignId=${marketingCampaignPromo.marketingCampaignId}`)
    },
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (marketingCampaignPromo, args, {loaders}) => loaders.ofbiz.load(`productPromos/find?productPromoId=${marketingCampaignPromo.productPromoId}`)
    }
  })
});

export {MarketingCampaignPromoType};
    




const MarketingCampaignPromoInputType = new GraphQLInputObjectType({
  name: 'MarketingCampaignPromoInputType',
  description: 'input type for MarketingCampaignPromo in marketing',

  fields: () => ({
    marketingCampaignId: {type: GraphQLString},
    productPromoId: {type: GraphQLString}
  })
});

export {MarketingCampaignPromoInputType};
    