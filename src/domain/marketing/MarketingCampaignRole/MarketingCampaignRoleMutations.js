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
import {MarketingCampaignRoleInputType} from '../../marketing/MarketingCampaignRole/MarketingCampaignRoleInputType.js';
import {MarketingCampaignRoleResponseType} from '../../marketing/MarketingCampaignRole/MarketingCampaignRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMarketingCampaignRole = {
  type: MarketingCampaignRoleResponseType,
  description: 'mutation for ofbiz createMarketingCampaignRole method',
  args:{marketingCampaignRoleToBeAdded: {type: MarketingCampaignRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/marketingCampaign/marketingCampaignRoles/add?`, args.marketingCampaignRoleToBeAdded, req);
  }
};
export {createMarketingCampaignRole};


const deleteMarketingCampaignRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMarketingCampaignRoleByIdUpdated method',
  args:{marketingCampaignRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/marketingCampaign/marketingCampaignRoles/${args.marketingCampaignRoleId}?`, null, req);
  }
};
export {deleteMarketingCampaignRoleByIdUpdated};


const updateMarketingCampaignRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMarketingCampaignRole method',
  args:{marketingCampaignRoleToBeUpdated: {type: MarketingCampaignRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/marketingCampaign/marketingCampaignRoles/${args.roleTypeId}?`, args.marketingCampaignRoleToBeUpdated, req);
  }
};
export {updateMarketingCampaignRole};
