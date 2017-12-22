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
import {QuoteTermAttributeResponseType} from '../../order/QuoteTermAttribute/QuoteTermAttributeResponseType.js';
import {QuoteTermAttributeInputType} from '../../order/QuoteTermAttribute/QuoteTermAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteTermAttribute = {
  type: QuoteTermAttributeResponseType,
  description: 'mutation for ofbiz createQuoteTermAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteTermAttributes/add?`, null, req);
  }
};
export {createQuoteTermAttribute};


const updateQuoteTermAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuoteTermAttribute method',
  args:{quoteTermAttributeToBeUpdated: {type: QuoteTermAttributeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteTermAttributes/${args.nullVal}?`, args.quoteTermAttributeToBeUpdated, req);
  }
};
export {updateQuoteTermAttribute};


const deleteQuoteTermAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteTermAttributeByIdUpdated method',
  args:{quoteTermAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteTermAttributes/${args.quoteTermAttributeId}?`, null, req);
  }
};
export {deleteQuoteTermAttributeByIdUpdated};
