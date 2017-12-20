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
import {QuoteTypeInputType} from '../../order/QuoteType/QuoteTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createQuoteType method',
  args:{quoteTypeToBeAdded: {type: QuoteTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteTypes/add?`, args.quoteTypeToBeAdded, req);
  }
};
export {createQuoteType};


const updateQuoteType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateQuoteType method',
  args:{quoteTypeToBeUpdated: {type: QuoteTypeInputType},quoteTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteTypes/${args.quoteTypeId}?`, args.quoteTypeToBeUpdated, req);
  }
};
export {updateQuoteType};


const deleteQuoteTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteQuoteTypeByIdUpdated method',
  args:{quoteTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteTypes/${args.quoteTypeId}?`, null, req);
  }
};
export {deleteQuoteTypeByIdUpdated};
