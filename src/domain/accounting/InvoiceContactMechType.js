
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
import {ContactMechType} from '../party/ContactMechType.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeTypeType.js';


const InvoiceContactMechType = new GraphQLObjectType({
  name: 'InvoiceContactMechType',
  description: 'Type for InvoiceContactMech in accounting',

  fields: () => ({
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (invoiceContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechPurposeTypes/find?contactMechPurposeTypeId=${invoiceContactMech.contactMechPurposeTypeId}`)
    },
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceContactMech, args, {loaders}) => loaders.ofbiz.load(`invoices/find?invoiceId=${invoiceContactMech.invoiceId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (invoiceContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${invoiceContactMech.contactMechId}`)
    }
  })
});

export {InvoiceContactMechType};
    