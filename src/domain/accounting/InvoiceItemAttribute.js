
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

import {InvoiceItemType} from '../accounting/InvoiceItem.js';


const InvoiceItemAttributeType = new GraphQLObjectType({
  name: 'InvoiceItemAttributeType',
  description: 'Type for InvoiceItemAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceItemAttribute, args, {loaders}) => loaders.ofbiz.load(`invoiceItems/find?invoiceId=${invoiceItemAttribute.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {InvoiceItemAttributeType};
    




const InvoiceItemAttributeInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemAttributeInputType',
  description: 'input type for InvoiceItemAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {InvoiceItemAttributeInputType};
    