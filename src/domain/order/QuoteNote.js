
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


const QuoteNoteType = new GraphQLObjectType({
  name: 'QuoteNoteType',
  description: 'Type for QuoteNote in order',

  fields: () => ({
    noteId: {type: GraphQLString},
    quote: {
      type: QuoteType,
      args : {quoteId: {type: GraphQLString}},
      resolve: (quoteNote, args, {loaders}) => loaders.ofbiz.load(`order/quotes/find?quoteId=${quoteNote.quoteId}`)
    }
  })
});

export {QuoteNoteType};
    




const QuoteNoteInputType = new GraphQLInputObjectType({
  name: 'QuoteNoteInputType',
  description: 'input type for QuoteNote in order',

  fields: () => ({
    noteId: {type: GraphQLString},
    quoteId: {type: GraphQLString}
  })
});

export {QuoteNoteInputType};
    