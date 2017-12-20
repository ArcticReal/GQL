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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesOpportunityStage = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSalesOpportunityStage method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityStages/add?`, null, req);
  }
};
export {createSalesOpportunityStage};


const updateSalesOpportunityStage = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSalesOpportunityStage method',
  args:{salesOpportunityStageToBeUpdated: {type: SalesOpportunityStageInputType},opportunityStageId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunity/salesOpportunityStages/${args.opportunityStageId}?`, args.salesOpportunityStageToBeUpdated, req);
  }
};
export {updateSalesOpportunityStage};


const deleteSalesOpportunityStageByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSalesOpportunityStageByIdUpdated method',
  args:{salesOpportunityStageId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunity/salesOpportunityStages/${args.salesOpportunityStageId}?`, null, req);
  }
};
export {deleteSalesOpportunityStageByIdUpdated};
