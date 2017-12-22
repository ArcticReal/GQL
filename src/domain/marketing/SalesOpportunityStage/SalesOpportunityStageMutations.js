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
import {SalesOpportunityStageInputType} from '../../marketing/SalesOpportunityStage/SalesOpportunityStageInputType.js';
import {SalesOpportunityStageResponseType} from '../../marketing/SalesOpportunityStage/SalesOpportunityStageResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesOpportunityStage = {
  type: SalesOpportunityStageResponseType,
  description: 'mutation for ofbiz createSalesOpportunityStage method',
  args:{salesOpportunityStageToBeAdded: {type: SalesOpportunityStageInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityStages/add?`, args.salesOpportunityStageToBeAdded, req);
  }
};
export {createSalesOpportunityStage};


const updateSalesOpportunityStage = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesOpportunityStage method',
  args:{salesOpportunityStageToBeUpdated: {type: SalesOpportunityStageInputType},opportunityStageId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunity/salesOpportunityStages/${args.opportunityStageId}?`, args.salesOpportunityStageToBeUpdated, req);
  }
};
export {updateSalesOpportunityStage};


const deleteSalesOpportunityStageByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesOpportunityStageByIdUpdated method',
  args:{salesOpportunityStageId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunity/salesOpportunityStages/${args.salesOpportunityStageId}?`, null, req);
  }
};
export {deleteSalesOpportunityStageByIdUpdated};
