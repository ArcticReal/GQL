
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

import {InvoiceItemType} from '../../accounting/InvoiceItem/InvoiceItemType.js';
import {InvoiceItemAssocTypeType} from '../../accounting/InvoiceItemAssocType/InvoiceItemAssocTypeType.js';


const InvoiceItemAssocType = new GraphQLObjectType({
  name: 'InvoiceItemAssocType',
  description: 'Type for InvoiceItemAssoc in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    invoiceItemSeqIdFrom: {type: GraphQLString},
    invoiceFrom: {
      type: InvoiceItemType,
      args : {invoiceIdFrom: {type: GraphQLString}},
      resolve: (invoiceItemAssoc, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItems/find?invoiceId=${invoiceItemAssoc.invoiceIdFrom}`)
    },
    invoiceItemSeqIdTo: {type: GraphQLString},
    invoiceItemAssocType: {
      type: InvoiceItemAssocTypeType,
      args : {invoiceItemAssocTypeId: {type: GraphQLString}},
      resolve: (invoiceItemAssoc, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItemAssocTypes/find?invoiceItemAssocTypeId=${invoiceItemAssoc.invoiceItemAssocTypeId}`)
    },
    invoiceTo: {
      type: InvoiceItemType,
      args : {invoiceIdTo: {type: GraphQLString}},
      resolve: (invoiceItemAssoc, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItems/find?invoiceId=${invoiceItemAssoc.invoiceIdTo}`)
    },
    partyIdTo: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {InvoiceItemAssocType};
    