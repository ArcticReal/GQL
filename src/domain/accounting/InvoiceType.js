
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
import {InvoiceTypeAttrType} from '../accounting/InvoiceTypeAttr.js';
import {InvoiceItemTypeMapType} from '../accounting/InvoiceItemTypeMap.js';


const InvoiceTypeType = new GraphQLObjectType({
  name: 'InvoiceTypeType',
  description: 'Type for InvoiceType in accounting',

  fields: () => ({
    parentType: {
      type: InvoiceTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceTypes/find?invoiceTypeId=${invoiceType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    invoiceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    invoiceItemTypeMaps: {
      type: new GraphQLList(InvoiceItemTypeMapType),
      args : {},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceItemTypeMaps/find?invoiceTypeId=${invoiceType.invoiceTypeId}`)
    },
    invoiceTypeAttrs: {
      type: new GraphQLList(InvoiceTypeAttrType),
      args : {},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceTypeAttrs/find?invoiceTypeId=${invoiceType.invoiceTypeId}`)
    },
    invoiceTypes: {
      type: new GraphQLList(InvoiceTypeType),
      args : {},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoice/invoiceTypes/find?invoiceTypeId=${invoiceType.invoiceTypeId}`)
    },
    invoices: {
      type: new GraphQLList(InvoiceType),
      args : {},
      resolve: (invoiceType, args, {loaders}) => loaders.ofbizArray.load(`accounting/invoices/find?invoiceTypeId=${invoiceType.invoiceTypeId}`)
    }
  })
});

export {InvoiceTypeType};
    




const InvoiceTypeInputType = new GraphQLInputObjectType({
  name: 'InvoiceTypeInputType',
  description: 'input type for InvoiceType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    invoiceTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InvoiceTypeInputType};
    