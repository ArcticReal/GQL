
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {InvoiceType} from '../../accounting/Invoice/InvoiceType.js';


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
    