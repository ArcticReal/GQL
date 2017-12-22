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
import {QuoteInputType} from '../../order/Quote/QuoteInputType.js';
import {QuoteResponseType} from '../../order/Quote/QuoteResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuote = {
  type: QuoteResponseType,
  description: 'mutation for ofbiz createQuote method',
  args:{quoteToBeAdded: {type: QuoteInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quotes/add?`, args.quoteToBeAdded, req);
  }
};
export {createQuote};


const updateQuote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuote method',
  args:{quoteToBeUpdated: {type: QuoteInputType},quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quotes/${args.quoteId}?`, args.quoteToBeUpdated, req);
  }
};
export {updateQuote};


const deleteQuoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteByIdUpdated method',
  args:{quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quotes/${args.quoteId}?`, null, req);
  }
};
export {deleteQuoteByIdUpdated};
