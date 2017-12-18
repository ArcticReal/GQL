
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

import {PartyRoleType} from '../party/PartyRole.js';
import {InvoiceType} from '../accounting/Invoice.js';


const InvoiceRoleType = new GraphQLObjectType({
  name: 'InvoiceRoleType',
  description: 'Type for InvoiceRole in accounting',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    datetimePerformed: {type: GraphQLString},
    percentage: {type: GraphQLFloat},
    invoice: {
      type: InvoiceType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoiceRole, args, {loaders}) => loaders.ofbiz.load(`accounting/invoices/find?invoiceId=${invoiceRole.invoiceId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (invoiceRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${invoiceRole.partyId}`)
    }
  })
});

export {InvoiceRoleType};
    




const InvoiceRoleInputType = new GraphQLInputObjectType({
  name: 'InvoiceRoleInputType',
  description: 'input type for InvoiceRole',

  fields: () => ({
    datetimePerformed: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    percentage: {type: GraphQLFloat},
    roleTypeId: {type: GraphQLString}
  })
});

export {InvoiceRoleInputType};
    