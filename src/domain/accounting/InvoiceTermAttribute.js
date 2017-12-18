
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

import {InvoiceTermType} from '../accounting/InvoiceTerm.js';


const InvoiceTermAttributeType = new GraphQLObjectType({
  name: 'InvoiceTermAttributeType',
  description: 'Type for InvoiceTermAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    invoiceTerm: {
      type: InvoiceTermType,
      args : {invoiceTermId: {type: GraphQLString}},
      resolve: (invoiceTermAttribute, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceTerms/find?invoiceTermId=${invoiceTermAttribute.invoiceTermId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {InvoiceTermAttributeType};
    




const InvoiceTermAttributeInputType = new GraphQLInputObjectType({
  name: 'InvoiceTermAttributeInputType',
  description: 'input type for InvoiceTermAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    invoiceTermId: {type: GraphQLString}
  })
});

export {InvoiceTermAttributeInputType};
    