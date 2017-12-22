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

const InvoiceNoteResponseType = new GraphQLObjectType({
  name: 'InvoiceNoteResponseType',
  description: 'response type for InvoiceNote',

  fields: () => ({
    invoiceId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {InvoiceNoteResponseType};
    