
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


const QuoteNoteType = new GraphQLObjectType({
  name: 'QuoteNoteType',
  description: 'Type for QuoteNote in order',

  fields: () => ({
    noteId: {type: GraphQLString},
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteNote, args, {loaders}) => loaders.ofbiz.load(`quotes/find?quoteId=${quoteNote.quoteId}`)
    }
  })
});

export {QuoteNoteType};
    