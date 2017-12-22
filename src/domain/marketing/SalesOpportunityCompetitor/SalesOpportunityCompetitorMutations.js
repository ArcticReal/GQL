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
import {SalesOpportunityCompetitorResponseType} from '../../marketing/SalesOpportunityCompetitor/SalesOpportunityCompetitorResponseType.js';
import {SalesOpportunityCompetitorInputType} from '../../marketing/SalesOpportunityCompetitor/SalesOpportunityCompetitorInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSalesOpportunityCompetitor = {
  type: SalesOpportunityCompetitorResponseType,
  description: 'mutation for ofbiz createSalesOpportunityCompetitor method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityCompetitors/add?`, null, req);
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
