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
import {MarketingCampaignPriceInputType} from '../../marketing/MarketingCampaignPrice/MarketingCampaignPriceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createMarketingCampaignPrice = {
  type: GraphQLString,
  description: 'mutation for ofbiz createMarketingCampaignPrice method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/marketingCampaign/marketingCampaignPrices/add?`, null, req);
  }
};
export {createMarketingCampaignPrice};


const deleteMarketingCampaignPriceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMarketingCampaignPriceByIdUpdated method',
  args:{marketingCampaignPriceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/marketingCampaign/marketingCampaignPrices/${args.marketingCampaignPriceId}?`, null, req);
  }
};
export {deleteMarketingCampaignPriceByIdUpdated};


const updateMarketingCampaignPrice = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMarketingCampaignPrice method',
  args:{marketingCampaignPriceToBeUpdated: {type: MarketingCampaignPriceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/marketingCampaign/marketingCampaignPrices/${args.nullVal}?`, args.marketingCampaignPriceToBeUpdated, req);
  }
};
export {updateMarketingCampaignPrice};
