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
import {QuoteTermAttributeInputType} from '../../order/QuoteTermAttribute/QuoteTermAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createQuoteTermAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createQuoteTermAttribute method',
  args:{quoteTermAttributeToBeAdded: {type: QuoteTermAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteTermAttributes/add?`, args.quoteTermAttributeToBeAdded, req);
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
