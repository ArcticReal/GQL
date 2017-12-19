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

const QuoteNoteInputType = new GraphQLInputObjectType({
  name: 'QuoteNoteInputType',
  description: 'input type for QuoteNote',

  fields: () => ({
    noteId: {type: GraphQLString},
    quoteId: {type: GraphQLString}
  })
});

export {QuoteNoteInputType};
    