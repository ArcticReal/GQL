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
import {QuoteAttributeInputType} from '../../order/QuoteAttribute/QuoteAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createQuoteAttribute method',
  args:{quoteAttributeToBeAdded: {type: QuoteAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteAttributes/add?`, args.quoteAttributeToBeAdded, req);
  }
};
export {createQuoteAttribute};


const updateQuoteAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateQuoteAttribute method',
  args:{quoteAttributeToBeUpdated: {type: QuoteAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteAttributes/${args.attrName}?`, args.quoteAttributeToBeUpdated, req);
  }
};
export {updateQuoteAttribute};


const deleteQuoteAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteQuoteAttributeByIdUpdated method',
  args:{quoteAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteAttributes/${args.quoteAttributeId}?`, null, req);
  }
};
export {deleteQuoteAttributeByIdUpdated};
