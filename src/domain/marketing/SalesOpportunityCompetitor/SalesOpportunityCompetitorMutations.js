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
import {SalesOpportunityCompetitorInputType} from '../../marketing/SalesOpportunityCompetitor/SalesOpportunityCompetitorInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSalesOpportunityCompetitor = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSalesOpportunityCompetitor method',
  args:{salesOpportunityCompetitorToBeAdded: {type: SalesOpportunityCompetitorInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityCompetitors/add?`, args.salesOpportunityCompetitorToBeAdded, req);
  }
};
export {createSalesOpportunityCompetitor};


const updateSalesOpportunityCompetitor = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesOpportunityCompetitor method',
  args:{salesOpportunityCompetitorToBeUpdated: {type: SalesOpportunityCompetitorInputType},competitorPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunity/salesOpportunityCompetitors/${args.competitorPartyId}?`, args.salesOpportunityCompetitorToBeUpdated, req);
  }
};
export {updateSalesOpportunityCompetitor};


const deleteSalesOpportunityCompetitorByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesOpportunityCompetitorByIdUpdated method',
  args:{salesOpportunityCompetitorId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunity/salesOpportunityCompetitors/${args.salesOpportunityCompetitorId}?`, null, req);
  }
};
export {deleteSalesOpportunityCompetitorByIdUpdated};
