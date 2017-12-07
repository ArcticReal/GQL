
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


const InvoiceAttributeType = new GraphQLObjectType({
  name: 'InvoiceAttributeType',
  description: 'Type for InvoiceAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceAttribute, args, {loaders}) => loaders.ofbiz.load(`invoices/find?invoiceId=${invoiceAttribute.invoiceId}`)
    },
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {InvoiceAttributeType};
    