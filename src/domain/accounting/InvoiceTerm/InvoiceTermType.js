
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

import {InvoiceType} from '../../accounting/Invoice/InvoiceType.js';
import {InvoiceTermAttributeType} from '../../accounting/InvoiceTermAttribute/InvoiceTermAttributeType.js';
import {TermTypeType} from '../../party/TermType/TermTypeType.js';


const InvoiceTermType = new GraphQLObjectType({
  name: 'InvoiceTermType',
  description: 'Type for InvoiceTerm in accounting',

  fields: () => ({
    textValue: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    invoiceTermId: {type: GraphQLString},
    termType: {
      type: TermTypeType,
      args : {termTypeId: {type: GraphQLString}},
      resolve: (invoiceTerm, args, {loaders}) => loaders.ofbiz.load(`party/termTypes/find?termTypeId=${invoiceTerm.termTypeId}`)
    },
    description: {type: GraphQLString},
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceTerm, args, {loaders}) => loaders.ofbiz.load(`accounting/invoices/find?invoiceId=${invoiceTerm.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    invoiceTermAttributes: {
      type: new GraphQLList(InvoiceTermAttributeType),
      args : {},
      resolve: (invoiceTerm, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceTermAttributes/find?invoiceTermId=${invoiceTerm.invoiceTermId}`)
    }
  })
});

export {InvoiceTermType};
    