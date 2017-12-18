
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
import {ContactMechType} from '../party/ContactMech.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeType.js';


const InvoiceContactMechType = new GraphQLObjectType({
  name: 'InvoiceContactMechType',
  description: 'Type for InvoiceContactMech in accounting',

  fields: () => ({
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (invoiceContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechPurposeTypes/find?contactMechPurposeTypeId=${invoiceContactMech.contactMechPurposeTypeId}`)
    },
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceContactMech, args, {loaders}) => loaders.ofbiz.load(`accounting/invoices/find?invoiceId=${invoiceContactMech.invoiceId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (invoiceContactMech, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${invoiceContactMech.contactMechId}`)
    }
  })
});

export {InvoiceContactMechType};
    




const InvoiceContactMechInputType = new GraphQLInputObjectType({
  name: 'InvoiceContactMechInputType',
  description: 'input type for InvoiceContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    invoiceId: {type: GraphQLString}
  })
});

export {InvoiceContactMechInputType};
    