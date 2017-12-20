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
import {SalesOpportunityWorkEffortInputType} from '../../marketing/SalesOpportunityWorkEffort/SalesOpportunityWorkEffortInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesOpportunityWorkEffort = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSalesOpportunityWorkEffort method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityWorkEfforts/add?`, null, req);
  }
};
export {createSalesOpportunityWorkEffort};


const updateSalesOpportunityWorkEffort = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSalesOpportunityWorkEffort method',
  args:{salesOpportunityWorkEffortToBeUpdated: {type: SalesOpportunityWorkEffortInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunity/salesOpportunityWorkEfforts/${args.nullVal}?`, args.salesOpportunityWorkEffortToBeUpdated, req);
  }
};
export {updateSalesOpportunityWorkEffort};


const deleteSalesOpportunityWorkEffortByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSalesOpportunityWorkEffortByIdUpdated method',
  args:{salesOpportunityWorkEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunity/salesOpportunityWorkEfforts/${args.salesOpportunityWorkEffortId}?`, null, req);
  }
};
export {deleteSalesOpportunityWorkEffortByIdUpdated};
