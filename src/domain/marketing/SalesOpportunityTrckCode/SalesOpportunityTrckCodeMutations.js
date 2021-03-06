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
import {SalesOpportunityTrckCodeInputType} from '../../marketing/SalesOpportunityTrckCode/SalesOpportunityTrckCodeInputType.js';
import {SalesOpportunityTrckCodeResponseType} from '../../marketing/SalesOpportunityTrckCode/SalesOpportunityTrckCodeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesOpportunityTrckCode = {
  type: SalesOpportunityTrckCodeResponseType,
  description: 'mutation for ofbiz createSalesOpportunityTrckCode method',
  args:{salesOpportunityTrckCodeToBeAdded: {type: SalesOpportunityTrckCodeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityTrckCodes/add?`, args.salesOpportunityTrckCodeToBeAdded, req);
  }
};
export {createSalesOpportunityTrckCode};


const deleteSalesOpportunityTrckCodeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesOpportunityTrckCodeByIdUpdated method',
  args:{salesOpportunityTrckCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunity/salesOpportunityTrckCodes/${args.salesOpportunityTrckCodeId}?`, null, req);
  }
};
export {deleteSalesOpportunityTrckCodeByIdUpdated};


const updateSalesOpportunityTrckCode = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesOpportunityTrckCode method',
  args:{salesOpportunityTrckCodeToBeUpdated: {type: SalesOpportunityTrckCodeInputType},trackingCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunity/salesOpportunityTrckCodes/${args.trackingCodeId}?`, args.salesOpportunityTrckCodeToBeUpdated, req);
  }
};
export {updateSalesOpportunityTrckCode};
