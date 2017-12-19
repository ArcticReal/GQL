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

const InvoiceNoteInputType = new GraphQLInputObjectType({
  name: 'InvoiceNoteInputType',
  description: 'input type for InvoiceNote',

  fields: () => ({
    invoiceId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {InvoiceNoteInputType};
    