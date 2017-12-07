
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {InvoiceTypeType} from '../accounting/InvoiceTypeType.js';


const InvoiceTypeAttrType = new GraphQLObjectType({
  name: 'InvoiceTypeAttrType',
  description: 'Type for InvoiceTypeAttr in accounting',

  fields: () => ({
    invoiceType: {
      type: InvoiceTypeType,
      args : {invoiceTypeId: {type: GraphQLString}},
      resolve: (invoiceTypeAttr, args, {loaders}) => loaders.ofbiz.load(`invoiceTypes/find?invoiceTypeId=${invoiceTypeAttr.invoiceTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {InvoiceTypeAttrType};
    