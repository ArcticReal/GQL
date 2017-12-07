
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceItemType} from '../accounting/InvoiceItemType.js';


const InvoiceItemAttributeType = new GraphQLObjectType({
  name: 'InvoiceItemAttributeType',
  description: 'Type for InvoiceItemAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItemAttribute, args, {loaders}) => loaders.ofbiz.load(`invoiceItems/find?invoiceId=${invoiceItemAttribute.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {InvoiceItemAttributeType};
    