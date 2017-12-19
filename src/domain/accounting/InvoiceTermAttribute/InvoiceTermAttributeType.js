
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

import {InvoiceTermType} from '../../accounting/InvoiceTerm/InvoiceTermType.js';


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
    