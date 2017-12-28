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
import {MarketingCampaignNoteInputType} from '../../marketing/MarketingCampaignNote/MarketingCampaignNoteInputType.js';
import {MarketingCampaignNoteResponseType} from '../../marketing/MarketingCampaignNote/MarketingCampaignNoteResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createMarketingCampaignNote = {
  type: MarketingCampaignNoteResponseType,
  description: 'mutation for ofbiz createMarketingCampaignNote method',
  args:{marketingCampaignNoteToBeAdded: {type: MarketingCampaignNoteInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/marketingCampaign/marketingCampaignNotes/add?`, args.marketingCampaignNoteToBeAdded, req);
  }
};
export {createMarketingCampaignNote};


const deleteMarketingCampaignNoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteMarketingCampaignNoteByIdUpdated method',
  args:{marketingCampaignNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/marketingCampaign/marketingCampaignNotes/${args.marketingCampaignNoteId}?`, null, req);
  }
};
export {deleteMarketingCampaignNoteByIdUpdated};


const updateMarketingCampaignNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateMarketingCampaignNote method',
  args:{marketingCampaignNoteToBeUpdated: {type: MarketingCampaignNoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/marketingCampaign/marketingCampaignNotes/${args.nullVal}?`, args.marketingCampaignNoteToBeUpdated, req);
  }
};
export {updateMarketingCampaignNote};
