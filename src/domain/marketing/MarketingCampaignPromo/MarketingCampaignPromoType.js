
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

import {ProductPromoType} from '../../product/ProductPromo/ProductPromoType.js';
import {MarketingCampaignType} from '../../marketing/MarketingCampaign/MarketingCampaignType.js';


const MarketingCampaignPromoType = new GraphQLObjectType({
  name: 'MarketingCampaignPromoType',
  description: 'Type for MarketingCampaignPromo in marketing',

  fields: () => ({
    marketingCampaign: {
      type: MarketingCampaignType,
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaignPromo, args, {loaders}) => loaders.ofbiz.load(`marketing/marketingCampaigns/find?marketingCampaignId=${marketingCampaignPromo.marketingCampaignId}`)
    },
    productPromo: {
      type: ProductPromoType,
      args : {productPromoId: {type: GraphQLString}},
      resolve: (marketingCampaignPromo, args, {loaders}) => loaders.ofbiz.load(`product/product/productPromos/find?productPromoId=${marketingCampaignPromo.productPromoId}`)
    }
  })
});

export {MarketingCampaignPromoType};
    