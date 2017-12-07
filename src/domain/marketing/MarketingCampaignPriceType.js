
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {MarketingCampaignType} from '../marketing/MarketingCampaignType.js';
import {ProductPriceRuleType} from '../product/ProductPriceRuleType.js';


const MarketingCampaignPriceType = new GraphQLObjectType({
  name: 'MarketingCampaignPriceType',
  description: 'Type for MarketingCampaignPrice in marketing',

  fields: () => ({
    marketingCampaign: {
      type: MarketingCampaignType,
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (marketingCampaignPrice, args, {loaders}) => loaders.ofbiz.load(`marketingCampaigns/find?marketingCampaignId=${marketingCampaignPrice.marketingCampaignId}`)
    },
    productPriceRule: {
      type: ProductPriceRuleType,
      args : {productPriceRuleId: {type: GraphQLString}},
      resolve: (marketingCampaignPrice, args, {loaders}) => loaders.ofbiz.load(`productPriceRules/find?productPriceRuleId=${marketingCampaignPrice.productPriceRuleId}`)
    }
  })
});

export {MarketingCampaignPriceType};
    