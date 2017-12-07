
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
import {InvoiceTermAttributeType} from '../accounting/InvoiceTermAttributeType.js';
import {TermTypeType} from '../party/TermTypeType.js';


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
      resolve: (invoiceTerm, args, {loaders}) => loaders.ofbiz.load(`termTypes/find?termTypeId=${invoiceTerm.termTypeId}`)
    },
    description: {type: GraphQLString},
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceTerm, args, {loaders}) => loaders.ofbiz.load(`invoices/find?invoiceId=${invoiceTerm.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termValue: {type: GraphQLFloat},
    invoiceTermAttribute: {
      type: new GraphQLList(InvoiceTermAttributeType),
      args : {invoiceTermId: {type: GraphQLString}},
      resolve: (invoiceTerm, args, {loaders}) => loaders.ofbizArray.load(`invoiceTermAttributes/find?invoiceTermId=${invoiceTerm.invoiceTermId}`)
    }
  })
});

export {InvoiceTermType};
    