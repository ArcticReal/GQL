
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


const InvoiceAttributeType = new GraphQLObjectType({
  name: 'InvoiceAttributeType',
  description: 'Type for InvoiceAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceAttribute, args, {loaders}) => loaders.ofbiz.load(`accounting/invoices/find?invoiceId=${invoiceAttribute.invoiceId}`)
    },
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {InvoiceAttributeType};
    




const InvoiceAttributeInputType = new GraphQLInputObjectType({
  name: 'InvoiceAttributeInputType',
  description: 'input type for InvoiceAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    invoiceId: {type: GraphQLString}
  })
});

export {InvoiceAttributeInputType};
    