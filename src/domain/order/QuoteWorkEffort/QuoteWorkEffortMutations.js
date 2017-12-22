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
import {QuoteWorkEffortResponseType} from '../../order/QuoteWorkEffort/QuoteWorkEffortResponseType.js';
import {QuoteWorkEffortInputType} from '../../order/QuoteWorkEffort/QuoteWorkEffortInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteWorkEffort = {
  type: QuoteWorkEffortResponseType,
  description: 'mutation for ofbiz createQuoteWorkEffort method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteWorkEfforts/add?`, null, req);
  }
};
export {createQuoteWorkEffort};


const updateQuoteWorkEffort = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuoteWorkEffort method',
  args:{quoteWorkEffortToBeUpdated: {type: QuoteWorkEffortInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteWorkEfforts/${args.nullVal}?`, args.quoteWorkEffortToBeUpdated, req);
  }
};
export {updateQuoteWorkEffort};


const deleteQuoteWorkEffortByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteWorkEffortByIdUpdated method',
  args:{quoteWorkEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteWorkEfforts/${args.quoteWorkEffortId}?`, null, req);
  }
};
export {deleteQuoteWorkEffortByIdUpdated};
