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
import {SalesOpportunityRoleInputType} from '../../marketing/SalesOpportunityRole/SalesOpportunityRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSalesOpportunityRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSalesOpportunityRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityRoles/add?`, null, req);
  }
};
export {createSalesOpportunityRole};


const updateSalesOpportunityRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesOpportunityRole method',
  args:{salesOpportunityRoleToBeUpdated: {type: SalesOpportunityRoleInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunity/salesOpportunityRoles/${args.nullVal}?`, args.salesOpportunityRoleToBeUpdated, req);
  }
};
export {updateSalesOpportunityRole};


const deleteSalesOpportunityRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesOpportunityRoleByIdUpdated method',
  args:{salesOpportunityRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunity/salesOpportunityRoles/${args.salesOpportunityRoleId}?`, null, req);
  }
};
export {deleteSalesOpportunityRoleByIdUpdated};
