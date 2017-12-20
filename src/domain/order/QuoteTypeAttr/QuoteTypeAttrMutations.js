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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createQuoteTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteTypeAttrs/add?`, null, req);
  }
};
export {createQuoteTypeAttr};


const updateQuoteTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateQuoteTypeAttr method',
  args:{quoteTypeAttrToBeUpdated: {type: QuoteTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteTypeAttrs/${args.attrName}?`, args.quoteTypeAttrToBeUpdated, req);
  }
};
export {updateQuoteTypeAttr};


const deleteQuoteTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteQuoteTypeAttrByIdUpdated method',
  args:{quoteTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteTypeAttrs/${args.quoteTypeAttrId}?`, null, req);
  }
};
export {deleteQuoteTypeAttrByIdUpdated};
