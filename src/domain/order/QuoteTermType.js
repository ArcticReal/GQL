
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {QuoteType} from '../order/QuoteType.js';
import {QuoteTermAttributeType} from '../order/QuoteTermAttributeType.js';
import {TermTypeType} from '../party/TermTypeType.js';


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
      resolve: (quoteTerm, args, {loaders}) => loaders.ofbiz.load(`termTypes/find?termTypeId=${quoteTerm.termTypeId}`)
    },
    description: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLInt},
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteTerm, args, {loaders}) => loaders.ofbiz.load(`quotes/find?quoteId=${quoteTerm.quoteId}`)
    },
    quoteTermAttribute: {
      type: new GraphQLList(QuoteTermAttributeType),
      args : {termTypeId: {type: GraphQLString}},
      resolve: (quoteTerm, args, {loaders}) => loaders.ofbizArray.load(`quoteTermAttributes/find?termTypeId=${quoteTerm.termTypeId}`)
    }
  })
});

export {QuoteTermType};
    