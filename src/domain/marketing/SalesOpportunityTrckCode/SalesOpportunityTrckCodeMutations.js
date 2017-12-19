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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSalesOpportunityTrckCode = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSalesOpportunityTrckCode method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityTrckCodes/add?`, null, req);
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
