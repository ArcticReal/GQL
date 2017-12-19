
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

import {InvoiceContentTypeType} from '../../accounting/InvoiceContentType/InvoiceContentTypeType.js';
import {InvoiceType} from '../../accounting/Invoice/InvoiceType.js';
import {ContentType} from '../../content/Content/ContentType.js';


const InvoiceContentType = new GraphQLObjectType({
  name: 'InvoiceContentType',
  description: 'Type for InvoiceContent in accounting',

  fields: () => ({
    invoiceContentType: {
      type: InvoiceContentTypeType,
      args : {invoiceContentTypeId: {type: GraphQLString}},
      resolve: (invoiceContent, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceContentTypes/find?invoiceContentTypeId=${invoiceContent.invoiceContentTypeId}`)
    },
    fromDate: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (invoiceContent, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${invoiceContent.contentId}`)
    },
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceContent, args, {loaders}) => loaders.ofbiz.load(`accounting/invoices/find?invoiceId=${invoiceContent.invoiceId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {InvoiceContentType};
    