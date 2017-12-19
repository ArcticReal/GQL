
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


const QuoteCoefficientType = new GraphQLObjectType({
  name: 'QuoteCoefficientType',
  description: 'Type for QuoteCoefficient in order',

  fields: () => ({
    coeffValue: {type: GraphQLFloat},
    coeffName: {type: GraphQLString},
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteCoefficient, args, {loaders}) => loaders.ofbiz.load(`order/quotes/find?quoteId=${quoteCoefficient.quoteId}`)
    }
  })
});

export {QuoteCoefficientType};
    