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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteTerm = {
  type: ResopnseType,
  description: 'mutation for ofbiz createQuoteTerm method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteTerms/add?`, null, req);
  }
};
export {createQuoteTerm};


const updateQuoteTerm = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateQuoteTerm method',
  args:{quoteTermToBeUpdated: {type: QuoteTermInputType},quoteItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteTerms/${args.quoteItemSeqId}?`, args.quoteTermToBeUpdated, req);
  }
};
export {updateQuoteTerm};


const deleteQuoteTermByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteQuoteTermByIdUpdated method',
  args:{quoteTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteTerms/${args.quoteTermId}?`, null, req);
  }
};
export {deleteQuoteTermByIdUpdated};
