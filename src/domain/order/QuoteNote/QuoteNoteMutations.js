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
import {QuoteNoteInputType} from '../../order/QuoteNote/QuoteNoteInputType.js';
import {QuoteNoteResponseType} from '../../order/QuoteNote/QuoteNoteResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteNote = {
  type: QuoteNoteResponseType,
  description: 'mutation for ofbiz createQuoteNote method',
  args:{quoteNoteToBeAdded: {type: QuoteNoteInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteNotes/add?`, args.quoteNoteToBeAdded, req);
  }
};
export {createQuoteNote};


const updateQuoteNote = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuoteNote method',
  args:{quoteNoteToBeUpdated: {type: QuoteNoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteNotes/${args.nullVal}?`, args.quoteNoteToBeUpdated, req);
  }
};
export {updateQuoteNote};


const deleteQuoteNoteByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteNoteByIdUpdated method',
  args:{quoteNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteNotes/${args.quoteNoteId}?`, null, req);
  }
};
export {deleteQuoteNoteByIdUpdated};
