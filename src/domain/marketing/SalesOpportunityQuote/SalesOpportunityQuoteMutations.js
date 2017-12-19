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
import {SalesOpportunityQuoteInputType} from '../../marketing/SalesOpportunityQuote/SalesOpportunityQuoteInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSalesOpportunityQuote = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSalesOpportunityQuote method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/salesOpportunity/salesOpportunityQuotes/add?`, null, req);
  }
};
export {createSalesOpportunityQuote};


const updateSalesOpportunityQuote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSalesOpportunityQuote method',
  args:{salesOpportunityQuoteToBeUpdated: {type: SalesOpportunityQuoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/salesOpportunity/salesOpportunityQuotes/${args.nullVal}?`, args.salesOpportunityQuoteToBeUpdated, req);
  }
};
export {updateSalesOpportunityQuote};


const deleteSalesOpportunityQuoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSalesOpportunityQuoteByIdUpdated method',
  args:{salesOpportunityQuoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/salesOpportunity/salesOpportunityQuotes/${args.salesOpportunityQuoteId}?`, null, req);
  }
};
export {deleteSalesOpportunityQuoteByIdUpdated};
