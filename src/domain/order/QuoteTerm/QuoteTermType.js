
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

import {QuoteType} from '../../order/Quote/QuoteType.js';
import {QuoteTermAttributeType} from '../../order/QuoteTermAttribute/QuoteTermAttributeType.js';
import {TermTypeType} from '../../party/TermType/TermTypeType.js';


const QuoteTermType = new GraphQLObjectType({
  name: 'QuoteTermType',
  description: 'Type for QuoteTerm in order',

  fields: () => ({
    textValue: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    quoteItemSeqId: {type: GraphQLString},
    termType: {
      type: TermTypeType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (quoteTerm, args, {loaders}) => loaders.ofbiz.load(`party/termTypes/find?termTypeId=${quoteTerm.termTypeId}`)
    },
    description: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLInt},
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteTerm, args, {loaders}) => loaders.ofbiz.load(`order/quotes/find?quoteId=${quoteTerm.quoteId}`)
    },
    quoteTermAttributes: {
      type: new GraphQLList(QuoteTermAttributeType),
      args : {},
      resolve: (quoteTerm, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteTermAttributes/find?termTypeId=${quoteTerm.termTypeId}`)
    }
  })
});

export {QuoteTermType};
    