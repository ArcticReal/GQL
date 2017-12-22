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
import {QuoteTypeAttrInputType} from '../../order/QuoteTypeAttr/QuoteTypeAttrInputType.js';
import {QuoteTypeAttrResponseType} from '../../order/QuoteTypeAttr/QuoteTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteTypeAttr = {
  type: QuoteTypeAttrResponseType,
  description: 'mutation for ofbiz createQuoteTypeAttr method',
  args:{quoteTypeAttrToBeAdded: {type: QuoteTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteTypeAttrs/add?`, args.quoteTypeAttrToBeAdded, req);
  }
};
export {createQuoteTypeAttr};


const updateQuoteTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuoteTypeAttr method',
  args:{quoteTypeAttrToBeUpdated: {type: QuoteTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteTypeAttrs/${args.attrName}?`, args.quoteTypeAttrToBeUpdated, req);
  }
};
export {updateQuoteTypeAttr};


const deleteQuoteTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteTypeAttrByIdUpdated method',
  args:{quoteTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteTypeAttrs/${args.quoteTypeAttrId}?`, null, req);
  }
};
export {deleteQuoteTypeAttrByIdUpdated};
