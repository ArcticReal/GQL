
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentApplicationType} from '../accounting/PaymentApplicationType.js';
import {InvoiceItemType} from '../accounting/InvoiceItemType.js';
import {InvoiceAttributeType} from '../accounting/InvoiceAttributeType.js';
import {InvoiceRoleType} from '../accounting/InvoiceRoleType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {InvoiceTypeType} from '../accounting/InvoiceTypeType.js';
import {InvoiceTermType} from '../accounting/InvoiceTermType.js';
import {PartyType} from '../party/PartyType.js';
import {InvoiceContactMechType} from '../accounting/InvoiceContactMechType.js';
import {BillingAccountType} from '../accounting/BillingAccountType.js';
import {InvoiceNoteType} from '../accounting/InvoiceNoteType.js';
import {InvoiceStatusType} from '../accounting/InvoiceStatusType.js';
import {InvoiceContentType} from '../accounting/InvoiceContentType.js';


const InvoiceType = new GraphQLObjectType({
  name: 'InvoiceType',
  description: 'Type for Invoice in accounting',

  fields: () => ({
    partyFrom: {
      type: PartyType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${invoice.partyIdFrom}`)
    },
    roleType: {
      type: RoleTypeType,
      args : {roleTypeId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${invoice.roleTypeId}`)
    },
    recurrenceInfoId: {type: GraphQLString},
    invoiceType: {
      type: InvoiceTypeType,
      args : {invoiceTypeId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`invoiceTypes/find?invoiceTypeId=${invoice.invoiceTypeId}`)
    },
    dueDate: {type: GraphQLString},
    description: {type: GraphQLString},
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`billingAccounts/find?billingAccountId=${invoice.billingAccountId}`)
    },
    invoiceDate: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${invoice.contactMechId}`)
    },
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    paidDate: {type: GraphQLString},
    referenceNumber: {type: GraphQLString},
    invoiceId: {type: GraphQLString},
    invoiceMessage: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${invoice.partyId}`)
    },
    invoiceContent: {
      type: new GraphQLList(InvoiceContentType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`invoiceContents/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceContactMech: {
      type: new GraphQLList(InvoiceContactMechType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`invoiceContactMechs/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceItem: {
      type: new GraphQLList(InvoiceItemType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`invoiceItems/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceStatus: {
      type: new GraphQLList(InvoiceStatusType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`invoiceStatuss/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceTerm: {
      type: new GraphQLList(InvoiceTermType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`invoiceTerms/find?invoiceId=${invoice.invoiceId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceNote: {
      type: new GraphQLList(InvoiceNoteType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`invoiceNotes/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceAttribute: {
      type: new GraphQLList(InvoiceAttributeType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`invoiceAttributes/find?invoiceId=${invoice.invoiceId}`)
    },
    invoiceRole: {
      type: new GraphQLList(InvoiceRoleType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`invoiceRoles/find?invoiceId=${invoice.invoiceId}`)
    },
    paymentApplication: {
      type: new GraphQLList(PaymentApplicationType),
      args : {invoiceId: {type: GraphQLString}},
      resolve: (invoice, args, {loaders}) => loaders.ofbizArray.load(`paymentApplications/find?invoiceId=${invoice.invoiceId}`)
    }
  })
});

export {InvoiceType};
    