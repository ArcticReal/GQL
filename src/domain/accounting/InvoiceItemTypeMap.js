
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

import {InvoiceItemTypeType} from '../accounting/InvoiceItemType.js';
import {InvoiceTypeType} from '../accounting/InvoiceType.js';


const InvoiceItemTypeMapType = new GraphQLObjectType({
  name: 'InvoiceItemTypeMapType',
  description: 'Type for InvoiceItemTypeMap in accounting',

  fields: () => ({
    invoiceItemMapKey: {type: GraphQLString},
    invoiceType: {
      type: InvoiceTypeType,
      args : {invoiceTypeId: {type: GraphQLString}},
      resolve: (invoiceItemTypeMap, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceTypes/find?invoiceTypeId=${invoiceItemTypeMap.invoiceTypeId}`)
    },
    invoiceItemType: {
      type: InvoiceItemTypeType,
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItemTypeMap, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItemTypes/find?invoiceItemTypeId=${invoiceItemTypeMap.invoiceItemTypeId}`)
    }
  })
});

export {InvoiceItemTypeMapType};
    




const InvoiceItemTypeMapInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemTypeMapInputType',
  description: 'input type for InvoiceItemTypeMap',

  fields: () => ({
    invoiceItemMapKey: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString},
    invoiceTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeMapInputType};
    