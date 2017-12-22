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
import {QuoteItemInputType} from '../../order/QuoteItem/QuoteItemInputType.js';
import {QuoteItemResponseType} from '../../order/QuoteItem/QuoteItemResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteItem = {
  type: QuoteItemResponseType,
  description: 'mutation for ofbiz createQuoteItem method',
  args:{quoteItemToBeAdded: {type: QuoteItemInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteItems/add?`, args.quoteItemToBeAdded, req);
  }
};
export {createQuoteItem};


const deleteQuoteItemByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteItemByIdUpdated method',
  args:{quoteItemId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteItems/${args.quoteItemId}?`, null, req);
  }
};
export {deleteQuoteItemByIdUpdated};


const updateQuoteItem = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuoteItem method',
  args:{quoteItemToBeUpdated: {type: QuoteItemInputType},quoteItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteItems/${args.quoteItemSeqId}?`, args.quoteItemToBeUpdated, req);
  }
};
export {updateQuoteItem};
