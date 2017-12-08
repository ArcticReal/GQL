
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

import {InvoiceItemAssocType} from '../accounting/InvoiceItemAssoc.js';


const InvoiceItemAssocTypeType = new GraphQLObjectType({
  name: 'InvoiceItemAssocTypeType',
  description: 'Type for InvoiceItemAssocType in accounting',

  fields: () => ({
    parentType: {
      type: InvoiceItemAssocTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (invoiceItemAssocType, args, {loaders}) => loaders.ofbiz.load(`invoiceItemAssocTypes/find?invoiceItemAssocTypeId=${invoiceItemAssocType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    invoiceItemAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    invoiceItemAssocs: {
      type: new GraphQLList(InvoiceItemAssocType),
      args : {invoiceItemAssocTypeId: {type: GraphQLString}},
      resolve: (invoiceItemAssocType, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemAssocs/find?invoiceItemAssocTypeId=${invoiceItemAssocType.invoiceItemAssocTypeId}`)
    },
    invoiceItemAssocTypes: {
      type: new GraphQLList(InvoiceItemAssocTypeType),
      args : {invoiceItemAssocTypeId: {type: GraphQLString}},
      resolve: (invoiceItemAssocType, args, {loaders}) => loaders.ofbizArray.load(`invoiceItemAssocTypes/find?invoiceItemAssocTypeId=${invoiceItemAssocType.invoiceItemAssocTypeId}`)
    }
  })
});

export {InvoiceItemAssocTypeType};
    




const InvoiceItemAssocTypeInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemAssocTypeInputType',
  description: 'input type for InvoiceItemAssocType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    invoiceItemAssocTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {InvoiceItemAssocTypeInputType};
    