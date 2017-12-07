
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
import {QuoteTypeAttrType} from '../order/QuoteTypeAttrType.js';


const QuoteTypeType = new GraphQLObjectType({
  name: 'QuoteTypeType',
  description: 'Type for QuoteType in order',

  fields: () => ({
    quoteTypeId: {type: GraphQLString},
    parentType: {
      type: QuoteTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (quoteType, args, {loaders}) => loaders.ofbiz.load(`quoteTypes/find?quoteTypeId=${quoteType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    quote: {
      type: new GraphQLList(QuoteType),
      args : {quoteTypeId: {type: GraphQLString}},
      resolve: (quoteType, args, {loaders}) => loaders.ofbizArray.load(`quotes/find?quoteTypeId=${quoteType.quoteTypeId}`)
    },
    quoteType: {
      type: new GraphQLList(QuoteTypeType),
      args : {quoteTypeId: {type: GraphQLString}},
      resolve: (quoteType, args, {loaders}) => loaders.ofbizArray.load(`quoteTypes/find?quoteTypeId=${quoteType.quoteTypeId}`)
    },
    quoteTypeAttr: {
      type: new GraphQLList(QuoteTypeAttrType),
      args : {quoteTypeId: {type: GraphQLString}},
      resolve: (quoteType, args, {loaders}) => loaders.ofbizArray.load(`quoteTypeAttrs/find?quoteTypeId=${quoteType.quoteTypeId}`)
    }
  })
});

export {QuoteTypeType};
    