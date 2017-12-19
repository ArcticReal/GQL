
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

import {InvoiceItemTypeType} from '../../accounting/InvoiceItemType/InvoiceItemTypeType.js';


const InvoiceItemTypeAttrType = new GraphQLObjectType({
  name: 'InvoiceItemTypeAttrType',
  description: 'Type for InvoiceItemTypeAttr in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    invoiceItemType: {
      type: InvoiceItemTypeType,
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItemTypeAttr, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItemTypes/find?invoiceItemTypeId=${invoiceItemTypeAttr.invoiceItemTypeId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {InvoiceItemTypeAttrType};
    