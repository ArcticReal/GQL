
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

import {InvoiceType} from '../accounting/Invoice.js';


const InvoiceNoteType = new GraphQLObjectType({
  name: 'InvoiceNoteType',
  description: 'Type for InvoiceNote in accounting',

  fields: () => ({
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceNote, args, {loaders}) => loaders.ofbiz.load(`accounting/invoices/find?invoiceId=${invoiceNote.invoiceId}`)
    },
    noteId: {type: GraphQLString}
  })
});

export {InvoiceNoteType};
    




const InvoiceNoteInputType = new GraphQLInputObjectType({
  name: 'InvoiceNoteInputType',
  description: 'input type for InvoiceNote',

  fields: () => ({
    invoiceId: {type: GraphQLString},
    noteId: {type: GraphQLString}
  })
});

export {InvoiceNoteInputType};
    