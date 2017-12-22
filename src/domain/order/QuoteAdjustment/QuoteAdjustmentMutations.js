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
import {QuoteAdjustmentInputType} from '../../order/QuoteAdjustment/QuoteAdjustmentInputType.js';
import {QuoteAdjustmentResponseType} from '../../order/QuoteAdjustment/QuoteAdjustmentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteAdjustment = {
  type: QuoteAdjustmentResponseType,
  description: 'mutation for ofbiz createQuoteAdjustment method',
  args:{quoteAdjustmentToBeAdded: {type: QuoteAdjustmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteAdjustments/add?`, args.quoteAdjustmentToBeAdded, req);
  }
};
export {createQuoteAdjustment};


const updateQuoteAdjustment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuoteAdjustment method',
  args:{quoteAdjustmentToBeUpdated: {type: QuoteAdjustmentInputType},quoteAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteAdjustments/${args.quoteAdjustmentId}?`, args.quoteAdjustmentToBeUpdated, req);
  }
};
export {updateQuoteAdjustment};


const deleteQuoteAdjustmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteAdjustmentByIdUpdated method',
  args:{quoteAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteAdjustments/${args.quoteAdjustmentId}?`, null, req);
  }
};
export {deleteQuoteAdjustmentByIdUpdated};
