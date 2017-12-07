
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceTermType} from '../accounting/InvoiceTermType.js';


const InvoiceTermAttributeType = new GraphQLObjectType({
  name: 'InvoiceTermAttributeType',
  description: 'Type for InvoiceTermAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    invoiceTerm: {
      type: InvoiceTermType,
      args : {invoiceTermId: {type: GraphQLString}},
      resolve: (invoiceTermAttribute, args, {loaders}) => loaders.ofbiz.load(`invoiceTerms/find?invoiceTermId=${invoiceTermAttribute.invoiceTermId}`)
    },
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {InvoiceTermAttributeType};
    