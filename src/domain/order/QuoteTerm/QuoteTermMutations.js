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
import {QuoteTermInputType} from '../../order/QuoteTerm/QuoteTermInputType.js';
import {QuoteTermResponseType} from '../../order/QuoteTerm/QuoteTermResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteTerm = {
  type: QuoteTermResponseType,
  description: 'mutation for ofbiz createQuoteTerm method',
  args:{quoteTermToBeAdded: {type: QuoteTermInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteTerms/add?`, args.quoteTermToBeAdded, req);
  }
};
export {createQuoteTerm};


const updateQuoteTerm = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuoteTerm method',
  args:{quoteTermToBeUpdated: {type: QuoteTermInputType},quoteItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteTerms/${args.quoteItemSeqId}?`, args.quoteTermToBeUpdated, req);
  }
};
export {updateQuoteTerm};


const deleteQuoteTermByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteTermByIdUpdated method',
  args:{quoteTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteTerms/${args.quoteTermId}?`, null, req);
  }
};
export {deleteQuoteTermByIdUpdated};
