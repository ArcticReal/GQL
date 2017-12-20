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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuote = {
  type: ResopnseType,
  description: 'mutation for ofbiz createQuote method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quotes/add?`, null, req);
  }
};
export {createQuote};


const updateQuote = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateQuote method',
  args:{quoteToBeUpdated: {type: QuoteInputType},quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quotes/${args.quoteId}?`, args.quoteToBeUpdated, req);
  }
};
export {updateQuote};


const deleteQuoteByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteQuoteByIdUpdated method',
  args:{quoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quotes/${args.quoteId}?`, null, req);
  }
};
export {deleteQuoteByIdUpdated};
