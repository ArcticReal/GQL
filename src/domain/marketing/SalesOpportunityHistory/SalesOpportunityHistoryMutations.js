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
import {SalesOpportunityHistoryInputType} from '../../marketing/SalesOpportunityHistory/SalesOpportunityHistoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesOpportunityHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSalesOpportunityHistory method',
  args:{salesOpportunityHistoryToBeAdded: {type: SalesOpportunityHistoryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityHistorys/add?`, args.salesOpportunityHistoryToBeAdded, req);
  }
};
export {createSalesOpportunityHistory};


const updateSalesOpportunityHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSalesOpportunityHistory method',
  args:{salesOpportunityHistoryToBeUpdated: {type: SalesOpportunityHistoryInputType},salesOpportunityHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunity/salesOpportunityHistorys/${args.salesOpportunityHistoryId}?`, args.salesOpportunityHistoryToBeUpdated, req);
  }
};
export {updateSalesOpportunityHistory};


const deleteSalesOpportunityHistoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSalesOpportunityHistoryByIdUpdated method',
  args:{salesOpportunityHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunity/salesOpportunityHistorys/${args.salesOpportunityHistoryId}?`, null, req);
  }
};
export {deleteSalesOpportunityHistoryByIdUpdated};
