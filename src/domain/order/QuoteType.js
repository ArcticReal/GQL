
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

import {QuoteType} from '../order/Quote.js';
import {QuoteTypeAttrType} from '../order/QuoteTypeAttr.js';


const QuoteTypeType = new GraphQLObjectType({
  name: 'QuoteTypeType',
  description: 'Type for QuoteType in order',

  fields: () => ({
    quoteTypeId: {type: GraphQLString},
    parentType: {
      type: QuoteTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (quoteType, args, {loaders}) => loaders.ofbiz.load(`order/quote/quoteTypes/find?quoteTypeId=${quoteType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    quotes: {
      type: new GraphQLList(QuoteType),
      args : {},
      resolve: (quoteType, args, {loaders}) => loaders.ofbizArray.load(`order/quotes/find?quoteTypeId=${quoteType.quoteTypeId}`)
    },
    quoteTypes: {
      type: new GraphQLList(QuoteTypeType),
      args : {},
      resolve: (quoteType, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteTypes/find?quoteTypeId=${quoteType.quoteTypeId}`)
    },
    quoteTypeAttrs: {
      type: new GraphQLList(QuoteTypeAttrType),
      args : {},
      resolve: (quoteType, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteTypeAttrs/find?quoteTypeId=${quoteType.quoteTypeId}`)
    }
  })
});

export {QuoteTypeType};
    




const QuoteTypeInputType = new GraphQLInputObjectType({
  name: 'QuoteTypeInputType',
  description: 'input type for QuoteType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    quoteTypeId: {type: GraphQLString}
  })
});

export {QuoteTypeInputType};
    