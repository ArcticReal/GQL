
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

import {InvoiceTypeType} from '../../accounting/InvoiceType/InvoiceTypeType.js';


const InvoiceTypeAttrType = new GraphQLObjectType({
  name: 'InvoiceTypeAttrType',
  description: 'Type for InvoiceTypeAttr in accounting',

  fields: () => ({
    invoiceType: {
      type: InvoiceTypeType,
      args : {invoiceTypeId: {type: GraphQLString}},
      resolve: (invoiceTypeAttr, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceTypes/find?invoiceTypeId=${invoiceTypeAttr.invoiceTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {InvoiceTypeAttrType};
    