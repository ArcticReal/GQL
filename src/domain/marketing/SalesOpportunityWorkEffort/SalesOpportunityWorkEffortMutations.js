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
import {SalesOpportunityWorkEffortResponseType} from '../../marketing/SalesOpportunityWorkEffort/SalesOpportunityWorkEffortResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesOpportunityWorkEffort = {
  type: SalesOpportunityWorkEffortResponseType,
  description: 'mutation for ofbiz createSalesOpportunityWorkEffort method',
  args:{salesOpportunityWorkEffortToBeAdded: {type: SalesOpportunityWorkEffortInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityWorkEfforts/add?`, args.salesOpportunityWorkEffortToBeAdded, req);
  }
};
export {createSalesOpportunityWorkEffort};


const updateSalesOpportunityWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesOpportunityWorkEffort method',
  args:{salesOpportunityWorkEffortToBeUpdated: {type: SalesOpportunityWorkEffortInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunity/salesOpportunityWorkEfforts/${args.nullVal}?`, args.salesOpportunityWorkEffortToBeUpdated, req);
  }
};
export {updateSalesOpportunityWorkEffort};


const deleteSalesOpportunityWorkEffortByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesOpportunityWorkEffortByIdUpdated method',
  args:{salesOpportunityWorkEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunity/salesOpportunityWorkEfforts/${args.salesOpportunityWorkEffortId}?`, null, req);
  }
};
export {deleteSalesOpportunityWorkEffortByIdUpdated};
