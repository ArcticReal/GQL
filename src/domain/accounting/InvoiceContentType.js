
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

import {InvoiceContentType} from '../accounting/InvoiceContent.js';


const InvoiceContentTypeType = new GraphQLObjectType({
  name: 'InvoiceContentTypeType',
  description: 'Type for InvoiceContentType in accounting',

  fields: () => ({
    invoiceContentTypeId: {type: GraphQLString},
    parentType: {
      type: InvoiceContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (invoiceContentType, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceContentTypes/find?invoiceContentTypeId=${invoiceContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    invoiceContentTypes: {
      type: new GraphQLList(InvoiceContentTypeType),
      args : {},
      resolve: (invoiceContentType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceContentTypes/find?invoiceContentTypeId=${invoiceContentType.invoiceContentTypeId}`)
    },
    invoiceContents: {
      type: new GraphQLList(InvoiceContentType),
      args : {},
      resolve: (invoiceContentType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceContents/find?invoiceContentTypeId=${invoiceContentType.invoiceContentTypeId}`)
    }
  })
});

export {InvoiceContentTypeType};
    




const InvoiceContentTypeInputType = new GraphQLInputObjectType({
  name: 'InvoiceContentTypeInputType',
  description: 'input type for InvoiceContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    invoiceContentTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InvoiceContentTypeInputType};
    