
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
import {InvoiceTypeAttrType} from '../accounting/InvoiceTypeAttrType.js';
import {InvoiceItemTypeMapType} from '../accounting/InvoiceItemTypeMapType.js';


const InvoiceTypeType = new GraphQLObjectType({
  name: 'InvoiceTypeType',
  description: 'Type for InvoiceType in accounting',

  fields: () => ({
    parentType: {
      type: InvoiceTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbiz.load(`invoiceTypes/find?invoiceTypeId=${invoiceType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    invoiceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    invoiceItemTypeMap: {
      type: new GraphQLList(InvoiceItemTypeMapType),
      args : {invoiceTypeId: {type: GraphQLString}},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemTypeMaps/find?invoiceTypeId=${invoiceType.invoiceTypeId}`)
    },
    invoiceTypeAttr: {
      type: new GraphQLList(InvoiceTypeAttrType),
      args : {invoiceTypeId: {type: GraphQLString}},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbizArray.load(`invoiceTypeAttrs/find?invoiceTypeId=${invoiceType.invoiceTypeId}`)
    },
    invoiceType: {
      type: new GraphQLList(InvoiceTypeType),
      args : {invoiceTypeId: {type: GraphQLString}},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbizArray.load(`invoiceTypes/find?invoiceTypeId=${invoiceType.invoiceTypeId}`)
    },
    invoice: {
      type: new GraphQLList(InvoiceType),
      args : {invoiceTypeId: {type: GraphQLString}},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbizArray.load(`invoices/find?invoiceTypeId=${invoiceType.invoiceTypeId}`)
    }
  })
});

export {InvoiceTypeType};
    