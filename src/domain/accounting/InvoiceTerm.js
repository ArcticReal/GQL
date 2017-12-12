
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
import {InvoiceTermAttributeType} from '../accounting/InvoiceTermAttribute.js';
import {TermTypeType} from '../party/TermType.js';


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
    




const InvoiceTermInputType = new GraphQLInputObjectType({
  name: 'InvoiceTermInputType',
  description: 'input type for InvoiceTerm in accounting',

  fields: () => ({
    textValue: {type: GraphQLString},
    termDays: {type: GraphQLInt},
    invoiceTermId: {type: GraphQLString},
    termTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLFloat}
  })
});

export {InvoiceTermInputType};
    