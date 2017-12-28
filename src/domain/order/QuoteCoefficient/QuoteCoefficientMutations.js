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
import {QuoteCoefficientInputType} from '../../order/QuoteCoefficient/QuoteCoefficientInputType.js';
import {QuoteCoefficientResponseType} from '../../order/QuoteCoefficient/QuoteCoefficientResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createQuoteCoefficient = {
  type: QuoteCoefficientResponseType,
  description: 'mutation for ofbiz createQuoteCoefficient method',
  args:{quoteCoefficientToBeAdded: {type: QuoteCoefficientInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/quote/quoteCoefficients/add?`, args.quoteCoefficientToBeAdded, req);
  }
};
export {createQuoteCoefficient};


const updateQuoteCoefficient = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuoteCoefficient method',
  args:{quoteCoefficientToBeUpdated: {type: QuoteCoefficientInputType},coeffName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/quote/quoteCoefficients/${args.coeffName}?`, args.quoteCoefficientToBeUpdated, req);
  }
};
export {updateQuoteCoefficient};


const deleteQuoteCoefficientByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuoteCoefficientByIdUpdated method',
  args:{quoteCoefficientId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/quote/quoteCoefficients/${args.quoteCoefficientId}?`, null, req);
  }
};
export {deleteQuoteCoefficientByIdUpdated};
