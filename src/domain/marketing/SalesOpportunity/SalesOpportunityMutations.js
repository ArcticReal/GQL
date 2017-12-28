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
import {SalesOpportunityInputType} from '../../marketing/SalesOpportunity/SalesOpportunityInputType.js';
import {SalesOpportunityResponseType} from '../../marketing/SalesOpportunity/SalesOpportunityResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesOpportunity = {
  type: SalesOpportunityResponseType,
  description: 'mutation for ofbiz createSalesOpportunity method',
  args:{salesOpportunityToBeAdded: {type: SalesOpportunityInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunitys/add?`, args.salesOpportunityToBeAdded, req);
  }
};
export {createSalesOpportunity};


const updateSalesOpportunity = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesOpportunity method',
  args:{salesOpportunityToBeUpdated: {type: SalesOpportunityInputType},salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunitys/${args.salesOpportunityId}?`, args.salesOpportunityToBeUpdated, req);
  }
};
export {updateSalesOpportunity};


const deleteSalesOpportunityByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesOpportunityByIdUpdated method',
  args:{salesOpportunityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunitys/${args.salesOpportunityId}?`, null, req);
  }
};
export {deleteSalesOpportunityByIdUpdated};
