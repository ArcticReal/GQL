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
import {MarketingCampaignPromoInputType} from '../../marketing/MarketingCampaignPromo/MarketingCampaignPromoInputType.js';
import {MarketingCampaignPromoResponseType} from '../../marketing/MarketingCampaignPromo/MarketingCampaignPromoResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMarketingCampaignPromo = {
  type: MarketingCampaignPromoResponseType,
  description: 'mutation for ofbiz createMarketingCampaignPromo method',
  args:{marketingCampaignPromoToBeAdded: {type: MarketingCampaignPromoInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/marketingCampaign/marketingCampaignPromos/add?`, args.marketingCampaignPromoToBeAdded, req);
  }
};
export {createMarketingCampaignPromo};


const deleteMarketingCampaignPromoByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMarketingCampaignPromoByIdUpdated method',
  args:{marketingCampaignPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/marketingCampaign/marketingCampaignPromos/${args.marketingCampaignPromoId}?`, null, req);
  }
};
export {deleteMarketingCampaignPromoByIdUpdated};


const updateMarketingCampaignPromo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMarketingCampaignPromo method',
  args:{marketingCampaignPromoToBeUpdated: {type: MarketingCampaignPromoInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/marketingCampaign/marketingCampaignPromos/${args.nullVal}?`, args.marketingCampaignPromoToBeUpdated, req);
  }
};
export {updateMarketingCampaignPromo};
