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
import {MarketingCampaignInputType} from '../../marketing/MarketingCampaign/MarketingCampaignInputType.js';
import {MarketingCampaignResponseType} from '../../marketing/MarketingCampaign/MarketingCampaignResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMarketingCampaign = {
  type: MarketingCampaignResponseType,
  description: 'mutation for ofbiz createMarketingCampaign method',
  args:{marketingCampaignToBeAdded: {type: MarketingCampaignInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/marketingCampaigns/add?`, args.marketingCampaignToBeAdded, req);
  }
};
export {createMarketingCampaign};


const updateMarketingCampaign = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMarketingCampaign method',
  args:{marketingCampaignToBeUpdated: {type: MarketingCampaignInputType},marketingCampaignId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/marketingCampaigns/${args.marketingCampaignId}?`, args.marketingCampaignToBeUpdated, req);
  }
};
export {updateMarketingCampaign};


const deleteMarketingCampaignByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMarketingCampaignByIdUpdated method',
  args:{marketingCampaignId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/marketingCampaigns/${args.marketingCampaignId}?`, null, req);
  }
};
export {deleteMarketingCampaignByIdUpdated};
