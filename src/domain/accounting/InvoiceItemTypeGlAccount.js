
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

import {PartyType} from '../party/Party.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {InvoiceItemTypeType} from '../accounting/InvoiceItemType.js';


const InvoiceItemTypeGlAccountType = new GraphQLObjectType({
  name: 'InvoiceItemTypeGlAccountType',
  description: 'Type for InvoiceItemTypeGlAccount in accounting',

  fields: () => ({
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (invoiceItemTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${invoiceItemTypeGlAccount.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (invoiceItemTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${invoiceItemTypeGlAccount.organizationPartyId}`)
    },
    invoiceItemType: {
      type: InvoiceItemTypeType,
      args : {invoiceItemTypeId: {type: GraphQLString}},
      resolve: (invoiceItemTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItemTypes/find?invoiceItemTypeId=${invoiceItemTypeGlAccount.invoiceItemTypeId}`)
    }
  })
});

export {InvoiceItemTypeGlAccountType};
    




const InvoiceItemTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'InvoiceItemTypeGlAccountInputType',
  description: 'input type for InvoiceItemTypeGlAccount in accounting',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    invoiceItemTypeId: {type: GraphQLString}
  })
});

export {InvoiceItemTypeGlAccountInputType};
    