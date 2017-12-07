
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceType} from '../accounting/InvoiceType.js';


const InvoiceNoteType = new GraphQLObjectType({
  name: 'InvoiceNoteType',
  description: 'Type for InvoiceNote in accounting',

  fields: () => ({
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceNote, args, {loaders}) => loaders.ofbiz.load(`invoices/find?invoiceId=${invoiceNote.invoiceId}`)
    },
    noteId: {type: GraphQLString}
  })
});

export {InvoiceNoteType};
    