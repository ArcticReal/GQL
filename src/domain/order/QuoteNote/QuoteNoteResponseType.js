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

const QuoteNoteResponseType = new GraphQLObjectType({
  name: 'QuoteNoteResponseType',
  description: 'response type for QuoteNote',

  fields: () => ({
    noteId: {type: GraphQLString},
    quoteId: {type: GraphQLString}
  })
});

export {QuoteNoteResponseType};
    