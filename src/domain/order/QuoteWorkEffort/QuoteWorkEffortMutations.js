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
import {QuoteWorkEffortInputType} from '../../order/QuoteWorkEffort/QuoteWorkEffortInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteWorkEffort = {
  type: ResopnseType,
  description: 'mutation for ofbiz createQuoteWorkEffort method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteWorkEfforts/add?`, null, req);
  }
};
export {createQuoteWorkEffort};


const updateQuoteWorkEffort = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateQuoteWorkEffort method',
  args:{quoteWorkEffortToBeUpdated: {type: QuoteWorkEffortInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteWorkEfforts/${args.nullVal}?`, args.quoteWorkEffortToBeUpdated, req);
  }
};
export {updateQuoteWorkEffort};


const deleteQuoteWorkEffortByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteQuoteWorkEffortByIdUpdated method',
  args:{quoteWorkEffortId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteWorkEfforts/${args.quoteWorkEffortId}?`, null, req);
  }
};
export {deleteQuoteWorkEffortByIdUpdated};
