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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteNote = {
  type: ResopnseType,
  description: 'mutation for ofbiz createQuoteNote method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteNotes/add?`, null, req);
  }
};
export {createQuoteNote};


const updateQuoteNote = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateQuoteNote method',
  args:{quoteNoteToBeUpdated: {type: QuoteNoteInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteNotes/${args.nullVal}?`, args.quoteNoteToBeUpdated, req);
  }
};
export {updateQuoteNote};


const deleteQuoteNoteByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteQuoteNoteByIdUpdated method',
  args:{quoteNoteId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteNotes/${args.quoteNoteId}?`, null, req);
  }
};
export {deleteQuoteNoteByIdUpdated};
