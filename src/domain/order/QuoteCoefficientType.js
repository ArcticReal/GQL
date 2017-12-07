
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


const QuoteCoefficientType = new GraphQLObjectType({
  name: 'QuoteCoefficientType',
  description: 'Type for QuoteCoefficient in order',

  fields: () => ({
    coeffValue: {type: GraphQLFloat},
    coeffName: {type: GraphQLString},
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteCoefficient, args, {loaders}) => loaders.ofbiz.load(`quotes/find?quoteId=${quoteCoefficient.quoteId}`)
    }
  })
});

export {QuoteCoefficientType};
    